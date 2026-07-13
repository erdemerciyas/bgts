/** Client-side persistence for Phase 1 (no DB) */

export type StoredGuess = {
  questionId: string;
  guess: number;
  submittedAt: string;
  participationPts: number;
  bonusPts?: number;
  totalPts?: number;
  band?: string;
  revealed?: boolean;
};

export type LeagueLocalState = {
  name: string;
  email: string;
  guesses: Record<string, StoredGuess>;
  seasonPts: number;
};

const KEY = "bgts_league_v1";

function guessContribution(g: StoredGuess): number {
  if (g.totalPts != null) return g.totalPts;
  return g.participationPts + (g.bonusPts ?? 0);
}

export function loadLeagueState(): LeagueLocalState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LeagueLocalState;
  } catch {
    return null;
  }
}

export function saveLeagueState(state: LeagueLocalState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(state));
}

/** Tahmini yazar; aynı sorunun eski katkısını düşürüp yenisini ekler. */
export function upsertGuess(
  state: LeagueLocalState,
  guess: StoredGuess
): LeagueLocalState {
  const prev = state.guesses[guess.questionId];
  const nextGuesses = { ...state.guesses, [guess.questionId]: guess };
  const seasonPts =
    state.seasonPts - (prev ? guessContribution(prev) : 0) + guessContribution(guess);

  return { ...state, guesses: nextGuesses, seasonPts };
}

export function clearLeagueState(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
