import { describe, expect, it } from "vitest";
import { scoreGuess } from "@/lib/league/scoring";
import { isStaffEmail } from "@/lib/league/crypto";

const scoring = {
  participation: 10,
  exact: 100,
  nearPct: 5,
  nearPts: 80,
  closePct: 15,
  closePts: 50,
};

describe("scoreGuess", () => {
  it("returns pending before reveal", () => {
    const s = scoreGuess(100, 1396, false, scoring);
    expect(s.band).toBe("pending");
    expect(s.total).toBe(10);
  });

  it("awards exact match", () => {
    const s = scoreGuess(1396, 1396, true, scoring);
    expect(s.band).toBe("exact");
    expect(s.total).toBe(110);
  });

  it("awards near band", () => {
    const s = scoreGuess(1400, 1396, true, scoring);
    expect(s.band).toBe("near");
    expect(s.bonus).toBe(80);
  });
});

describe("isStaffEmail", () => {
  it("allows bgts.com", () => {
    expect(isStaffEmail("ali.veli@bgts.com")).toBe(true);
  });

  it("rejects other domains", () => {
    expect(isStaffEmail("ali@gmail.com")).toBe(false);
  });
});
