import type { SeasonConfig } from "@/data/league/season-2026";

export type ScoreBreakdown = {
  participation: number;
  bonus: number;
  total: number;
  band: "exact" | "near" | "close" | "participation" | "pending";
};

export function scoreGuess(
  guess: number,
  correctAnswer: number | null,
  revealed: boolean,
  scoring: SeasonConfig["scoring"]
): ScoreBreakdown {
  const participation = scoring.participation;

  if (!revealed || correctAnswer == null) {
    return {
      participation,
      bonus: 0,
      total: participation,
      band: "pending",
    };
  }

  if (guess === correctAnswer) {
    return {
      participation,
      bonus: scoring.exact,
      total: participation + scoring.exact,
      band: "exact",
    };
  }

  const denom = Math.max(Math.abs(correctAnswer), 1);
  const pct = (Math.abs(guess - correctAnswer) / denom) * 100;

  if (pct <= scoring.nearPct) {
    return {
      participation,
      bonus: scoring.nearPts,
      total: participation + scoring.nearPts,
      band: "near",
    };
  }

  if (pct <= scoring.closePct) {
    return {
      participation,
      bonus: scoring.closePts,
      total: participation + scoring.closePts,
      band: "close",
    };
  }

  return {
    participation,
    bonus: 0,
    total: participation,
    band: "participation",
  };
}
