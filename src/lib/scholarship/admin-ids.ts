/** "1,2,3" / string[] → geçerli, tekil pozitif id listesi (en fazla 5000). */
export function parseIds(input: unknown): number[] {
    const parts = Array.isArray(input) ? input : typeof input === "string" ? input.split(",") : [];
    const ids = parts.map((p) => Number(p)).filter((n) => Number.isSafeInteger(n) && n > 0);
    return [...new Set(ids)].slice(0, 5000);
}
