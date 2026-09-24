import { describe, expect, it } from "vitest";

import { createChallenge, verifyChallenge } from "./captcha";

function solve(question: string): number {
    const [a, op, b] = question.split(" ");
    if (op === "+") return Number(a) + Number(b);
    if (op === "−") return Number(a) - Number(b);
    return Number(a) * Number(b);
}

describe("scholarship math captcha", () => {
    it("doğru cevabı kabul eder, cevap token içinde açık değildir", () => {
        const c = createChallenge();
        const answer = solve(c.question);
        expect(c.token.split(".")).toHaveLength(3);
        expect(verifyChallenge(c.token, String(answer))).toBe(true);
    });

    it("yanlış cevabı reddeder", () => {
        const c = createChallenge();
        expect(verifyChallenge(c.token, String(solve(c.question) + 1))).toBe(false);
    });

    it("aynı token ikinci kez kullanılamaz", () => {
        const c = createChallenge();
        const answer = String(solve(c.question));
        expect(verifyChallenge(c.token, answer)).toBe(true);
        expect(verifyChallenge(c.token, answer)).toBe(false);
    });

    it("süresi dolmuş veya bozuk token reddedilir", () => {
        const c = createChallenge(Date.now() - 11 * 60 * 1000);
        expect(verifyChallenge(c.token, String(solve(c.question)))).toBe(false);
        expect(verifyChallenge("abc", "5")).toBe(false);
        expect(verifyChallenge(undefined, "5")).toBe(false);
        const fresh = createChallenge();
        const [exp, nonce, sig] = fresh.token.split(".");
        expect(verifyChallenge(`${Number(exp) + 1}.${nonce}.${sig}`, String(solve(fresh.question)))).toBe(false);
    });
});
