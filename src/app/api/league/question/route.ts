import { NextResponse } from "next/server";
import {
  getActiveQuestion,
  getNextQuestionOpensAt,
  SEASON_2026,
  toPublicQuestion,
} from "@/data/league/season-2026";
import { getLeagueSession } from "@/lib/league/session";

export async function GET() {
  try {
    const now = new Date();
    const active = getActiveQuestion(now);
    const session = await getLeagueSession();

    return NextResponse.json({
      season: {
        id: SEASON_2026.id,
        label: SEASON_2026.label,
        monthLeg: SEASON_2026.monthLeg,
        titles: SEASON_2026.titles,
        prizes: SEASON_2026.prizes,
        monthlyBonusNote: SEASON_2026.monthlyBonusNote,
        scoring: SEASON_2026.scoring,
        announcement: SEASON_2026.announcement,
        atmosphereLeaderboard: SEASON_2026.atmosphereLeaderboard,
      },
      question: active ? toPublicQuestion(active, now) : null,
      questions: SEASON_2026.questions.map((q) => toPublicQuestion(q, now)),
      nextOpensAt: getNextQuestionOpensAt(now),
      session: session ? { name: session.name, email: session.email } : null,
      now: now.toISOString(),
    });
  } catch (error) {
    console.error("League question error:", error);
    return NextResponse.json(
      { message: "Soru bilgisi alınamadı." },
      { status: 500 }
    );
  }
}
