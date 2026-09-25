import { neon } from "@neondatabase/serverless";
import type { ScholarshipData } from "./schema";

/** Burs başvurularının Neon PostgreSQL deposu. Tablo: scripts/scholarship-db-init.mjs */

function db() {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL tanımlı değil.");
    return neon(url);
}

export type ApplicationRow = {
    id: number;
    reference: string;
    created_at: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    university: string;
    data: ScholarshipData;
};

// bigserial sürücüden string döner; istemciye sayı olarak verilir.
const toRows = (rows: Record<string, unknown>[]) =>
    rows.map((r) => ({ ...r, id: Number(r.id), created_at: new Date(r.created_at as string).toISOString() }) as ApplicationRow);

export async function insertApplication(reference: string, d: ScholarshipData) {
    await db()`
        INSERT INTO scholarship_applications (reference, first_name, last_name, email, phone, university, data)
        VALUES (${reference}, ${d.firstName}, ${d.lastName}, ${d.email}, ${d.phone}, ${d.university}, ${JSON.stringify(d)}::jsonb)
    `;
}

export async function countApplications(): Promise<number> {
    const rows = await db()`SELECT count(*)::int AS n FROM scholarship_applications`;
    return rows[0].n as number;
}

/** En yeni başvurular önce; `limit` verilmezse tümü. */
export async function listApplications(limit?: number, offset = 0): Promise<ApplicationRow[]> {
    const sql = db();
    const rows = limit
        ? await sql`SELECT * FROM scholarship_applications ORDER BY created_at DESC, id DESC LIMIT ${limit} OFFSET ${offset}`
        : await sql`SELECT * FROM scholarship_applications ORDER BY created_at DESC, id DESC`;
    return toRows(rows);
}

export async function listApplicationsByIds(ids: number[]): Promise<ApplicationRow[]> {
    const rows = await db()`SELECT * FROM scholarship_applications WHERE id = ANY(${ids}::bigint[]) ORDER BY created_at DESC, id DESC`;
    return toRows(rows);
}

export async function deleteApplications(ids: number[]): Promise<number> {
    const rows = await db()`DELETE FROM scholarship_applications WHERE id = ANY(${ids}::bigint[]) RETURNING id`;
    return rows.length;
}
