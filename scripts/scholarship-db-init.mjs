// Burs başvuru tablosunu oluşturur (idempotent). Kullanım: npm run db:init
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
    console.error("DATABASE_URL tanımlı değil (.env.local).");
    process.exit(1);
}

const sql = neon(url);

await sql`
    CREATE TABLE IF NOT EXISTS scholarship_applications (
        id          bigserial PRIMARY KEY,
        reference   text UNIQUE NOT NULL,
        created_at  timestamptz NOT NULL DEFAULT now(),
        first_name  text NOT NULL,
        last_name   text NOT NULL,
        email       text NOT NULL,
        phone       text NOT NULL,
        university  text NOT NULL,
        data        jsonb NOT NULL
    )
`;
await sql`CREATE INDEX IF NOT EXISTS idx_scholarship_created ON scholarship_applications (created_at DESC)`;

const [{ n }] = await sql`SELECT count(*)::int AS n FROM scholarship_applications`;
console.log(`scholarship_applications hazır (${n} kayıt).`);
