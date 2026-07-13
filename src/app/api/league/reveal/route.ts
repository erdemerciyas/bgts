import { NextResponse } from "next/server";
import {
  getQuestionById,
  getQuestionStatus,
  SEASON_2026,
} from "@/data/league/season-2026";
import { isLeagueDemo } from "@/lib/league/demo";
import { scoreGuess } from "@/lib/league/scoring";
import { getLeagueSession } from "@/lib/league/session";

export async function GET(req: Request) {
  try {
    const session = await getLeagueSession();
    if (!session) {
      return NextResponse.json(
        { message: "Oturum gerekli." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const questionId = searchParams.get("questionId");
    const guessParam = searchParams.get("guess");

    if (!questionId) {
      return NextResponse.json({ message: "questionId gerekli." }, { status: 400 });
    }

    const question = getQuestionById(questionId);
    if (!question) {
      return NextResponse.json({ message: "Soru bulunamadı." }, { status: 404 });
    }

    const status = getQuestionStatus(question);
    const demo = isLeagueDemo();

    if (!demo && status !== "revealed") {
      return NextResponse.json(
        {
          revealed: false,
          revealAt: question.revealAt,
          message: "Doğru cevap henüz açıklanmadı.",
        },
        { status: 200 }
      );
    }

    if (question.correctAnswer == null) {
      return NextResponse.json(
        {
          revealed: true,
          demo,
          correctAnswer: null,
          explanation: question.explanation,
          message: "Cevap henüz netleştirilmedi.",
          score: null,
        },
        { status: 200 }
      );
    }

    const guess =
      guessParam != null && guessParam !== ""
        ? Number.parseInt(guessParam, 10)
        : NaN;

    const score = Number.isFinite(guess)
      ? scoreGuess(guess, question.correctAnswer, true, SEASON_2026.scoring)
      : null;

    return NextResponse.json({
      revealed: true,
      demo,
      questionId: question.id,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      score,
    });
  } catch (error) {
    console.error("League reveal error:", error);
    return NextResponse.json(
      { message: "Açıklama alınamadı." },
      { status: 500 }
    );
  }
}
