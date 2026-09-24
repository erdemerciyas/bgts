import { NextResponse } from "next/server";
import { createChallenge } from "@/lib/scholarship/captcha";

export const dynamic = "force-dynamic";

/** Burs formu için yeni bir matematik sorusu döner (cevap imzalı token içinde gizlidir). */
export function GET() {
    try {
        return NextResponse.json(createChallenge(), { headers: { "Cache-Control": "no-store" } });
    } catch (error) {
        console.error("Burs Başvurusu güvenlik sorusu hatası:", error);
        return NextResponse.json({ message: "Güvenlik sorusu oluşturulamadı." }, { status: 500 });
    }
}
