/** Phase 1 demo: skor ve doğru cevap tahmin güncellenince hemen hesaplanır. */
export function isLeagueDemo(): boolean {
  const v = process.env.LEAGUE_DEMO;
  if (v == null || v === "") return true;
  return v === "1" || v.toLowerCase() === "true" || v === "yes";
}
