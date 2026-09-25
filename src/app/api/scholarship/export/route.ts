import ExcelJS from "exceljs";
import { listApplications, listApplicationsByIds } from "@/lib/scholarship/db";
import { parseIds } from "@/lib/scholarship/admin-ids";
import { EXPORT_COLUMNS, toRow } from "@/lib/scholarship/labels";

// Erişim middleware'deki Basic Auth ile korunur.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const formatDate = (value: string) =>
    new Date(value).toLocaleString("tr-TR", { timeZone: "Europe/Istanbul", dateStyle: "short", timeStyle: "short" });

/** GET: tüm başvurular. */
export function GET() {
    return exportXlsx(null);
}

/** POST (form, `ids=1,2,3`): yalnızca seçili başvurular. */
export async function POST(req: Request) {
    const form = await req.formData().catch(() => null);
    const ids = parseIds(form?.get("ids"));
    if (ids.length === 0) return new Response("Geçersiz seçim.", { status: 400 });
    return exportXlsx(ids);
}

async function exportXlsx(ids: number[] | null) {
    try {
        const rows = ids ? await listApplicationsByIds(ids) : await listApplications();

        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet("Başvurular", { views: [{ state: "frozen", ySplit: 1, xSplit: 2 }] });
        sheet.columns = [
            { header: "Başvuru No", width: 18 },
            { header: "Başvuru Tarihi", width: 18 },
            ...EXPORT_COLUMNS.map((c) => ({ header: c.header, width: c.width })),
        ];
        for (const r of rows) {
            sheet.addRow([r.reference, formatDate(r.created_at), ...toRow(r.data)]);
        }

        const header = sheet.getRow(1);
        header.font = { bold: true, color: { argb: "FFFFFFFF" } };
        header.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF0056A7" } };
        header.alignment = { vertical: "middle", wrapText: true };
        header.height = 32;
        sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: sheet.columnCount } };

        const buffer = await workbook.xlsx.writeBuffer();
        const date = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Istanbul" });

        return new Response(buffer, {
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Content-Disposition": `attachment; filename="burs-basvurulari-${date}${ids ? `-secili-${rows.length}` : ""}.xlsx"`,
                "Cache-Control": "no-store",
            },
        });
    } catch (error) {
        console.error("Burs Excel Hatası:", error);
        return new Response("Excel oluşturulamadı.", { status: 500 });
    }
}
