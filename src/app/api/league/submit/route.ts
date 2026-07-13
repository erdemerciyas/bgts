import { NextResponse } from "next/server";
import { z } from "zod";
import {
  getQuestionById,
  getQuestionStatus,
  SEASON_2026,
} from "@/data/league/season-2026";
import { isLeagueDemo } from "@/lib/league/demo";
import { scoreGuess } from "@/lib/league/scoring";
import { getLeagueSession } from "@/lib/league/session";

const schema = z.object({
  questionId: z.string().min(1).max(64),
  guess: z.number().int().min(0).max(999999),
});

export async function POST(req: Request) {
  try {
    const session = await getLeagueSession();
    if (!session) {
      return NextResponse.json(
        { message: "Oturum gerekli. Lütfen tekrar doğrulama yapın." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ message: "Geçersiz tahmin." }, { status: 400 });
    }

    const question = getQuestionById(parsed.data.questionId);
    if (!question) {
      return NextResponse.json({ message: "Soru bulunamadı." }, { status: 404 });
    }

    const status = getQuestionStatus(question);
    const demo = isLeagueDemo();

    if (!demo && status !== "open") {
      return NextResponse.json(
        { message: "Bu soru için tahmin penceresi kapalı." },
        { status: 403 }
      );
    }

    const participationPts = SEASON_2026.scoring.participation;
    const shouldScoreNow =
      demo || status === "revealed";

    let score = null;
    let correctAnswer: number | null = null;
    let explanation: string | null = null;
    let scored = false;

    if (shouldScoreNow && question.correctAnswer != null) {
      score = scoreGuess(
        parsed.data.guess,
        question.correctAnswer,
        true,
        SEASON_2026.scoring
      );
      correctAnswer = question.correctAnswer;
      explanation = question.explanation;
      scored = true;
    } else if (shouldScoreNow && question.correctAnswer == null) {
      score = {
        participation: participationPts,
        bonus: 0,
        total: participationPts,
        band: "participation" as const,
      };
      explanation = question.explanation;
      scored = true;
    }

    return NextResponse.json({
      message: "Tahminin kaydedildi.",
      questionId: question.id,
      guess: parsed.data.guess,
      participationPts,
      revealAt: question.revealAt,
      closesAt: question.closesAt,
      demo,
      scored,
      correctAnswer: scored ? correctAnswer : undefined,
      explanation: scored ? explanation : undefined,
      score: scored ? score : undefined,
    });
  } catch (error) {
    console.error("League submit error:", error);
    return NextResponse.json(
      { message: "Tahmin kaydedilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
