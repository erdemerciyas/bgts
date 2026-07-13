"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { localizedHref } from "@/lib/routes";
import type { Locale } from "@/i18n-config";
import type { PublicQuestion } from "@/data/league/season-2026";
import {
  loadLeagueState,
  saveLeagueState,
  upsertGuess,
  type LeagueLocalState,
} from "@/lib/league/storage";
import "./league.css";

type Screen =
  | "announce"
  | "landing"
  | "verify"
  | "question"
  | "result"
  | "league";

type SeasonPayload = {
  id: string;
  label: string;
  monthLeg: string;
  titles: { main: string; sub: string };
  prizes: {
    rank: number;
    label: string;
    detail?: string;
    hook?: string;
    image: string;
  }[];
  monthlyBonusNote: string;
  scoring: {
    participation: number;
    exact: number;
    nearPct: number;
    nearPts: number;
    closePct: number;
    closePts: number;
  };
  announcement: {
    greeting: string;
    body: string[];
    goals: string[];
    closing: string;
    signOff: string;
  };
  atmosphereLeaderboard: { name: string; seasonPts: number; monthPts: number }[];
};

type Bootstrap = {
  season: SeasonPayload;
  question: PublicQuestion | null;
  questions: PublicQuestion[];
  nextOpensAt: string | null;
  session: { name: string; email: string } | null;
  now: string;
};

type BoardTab = "month" | "season";

function formatCountdown(targetIso: string, nowMs: number): string {
  const diff = new Date(targetIso).getTime() - nowMs;
  if (diff <= 0) return "Şimdi";
  const totalMin = Math.floor(diff / 60000);
  const days = Math.floor(totalMin / (60 * 24));
  const hours = Math.floor((totalMin % (60 * 24)) / 60);
  const mins = totalMin % 60;
  if (days > 0) return `${days} gün ${hours} saat ${mins} dk`;
  if (hours > 0) return `${hours} saat ${mins} dk`;
  return `${mins} dk`;
}

function parseGuessInput(raw: string): number | null {
  const cleaned = raw.trim().replace(/\s/g, "").replace(/,/g, "");
  if (!cleaned) return null;
  if (!/^\d+$/.test(cleaned)) return null;
  const n = Number.parseInt(cleaned, 10);
  if (!Number.isFinite(n) || n < 0 || n > 999999) return null;
  return n;
}

function GeometryBackdrop() {
  return (
    <div className="league-geometry" aria-hidden>
      <svg className="g1" viewBox="0 0 80 80" fill="currentColor">
        <path d="M8 8h28v18H26v28H8V8zm36 18h28v46H44V46h18V26H44z" />
      </svg>
      <svg className="g2" viewBox="0 0 80 80" fill="currentColor">
        <path d="M12 12h36v16H28v40H12V12zm40 24h16v32H52V36z" />
      </svg>
      <svg className="g3" viewBox="0 0 80 80" fill="currentColor">
        <path d="M10 50h20V10h20v60H10V50zm44-20h16v40H54V30z" />
      </svg>
      <svg className="g4" viewBox="0 0 80 80" fill="currentColor">
        <path d="M6 6h32v20H24v36H6V6zm38 22h30v46H44V48h20V28H44z" />
      </svg>
    </div>
  );
}

function BgtsLockup({
  subtitle = "Internal League",
  size = "md",
}: {
  subtitle?: string;
  size?: "md" | "lg";
}) {
  const width = size === "lg" ? 200 : 156;
  const height = size === "lg" ? 54 : 42;
  return (
    <div className={`league-lockup${size === "lg" ? " league-lockup--lg" : ""}`}>
      <Image
        src="/BGTS_logo_white.png"
        alt="BGTS"
        width={width}
        height={height}
        priority
        className="league-lockup-logo"
      />
      <div className="league-lockup-text">
        <div className="league-lockup-title">
          BGTS <span>League</span>
        </div>
        {subtitle ? <div className="league-lockup-sub">{subtitle}</div> : null}
      </div>
    </div>
  );
}

function BrandBar({ seasonLabel, monthLeg }: { seasonLabel: string; monthLeg: string }) {
  return (
    <div className="league-brand">
      <BgtsLockup subtitle={`${seasonLabel} · ${monthLeg}`} />
      <div className="league-season">Personel</div>
    </div>
  );
}

export default function LeagueClient({ lang }: { lang: string }) {
  const locale = (lang === "eng" ? "eng" : "tr") as Locale;
  const reduceMotion = useReducedMotion();
  const [screen, setScreen] = useState<Screen>("announce");
  const [boot, setBoot] = useState<Bootstrap | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [guessText, setGuessText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [local, setLocal] = useState<LeagueLocalState | null>(null);
  const [boardTab, setBoardTab] = useState<BoardTab>("month");
  const [revealInfo, setRevealInfo] = useState<{
    correctAnswer: number | null;
    explanation: string;
    score: { participation: number; bonus: number; total: number; band: string } | null;
  } | null>(null);
  const [nowTick, setNowTick] = useState(() => Date.now());
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const refreshBootstrap = useCallback(async () => {
    const res = await fetch("/api/league/question", { cache: "no-store" });
    if (!res.ok) throw new Error("Soru yüklenemedi");
    const data = (await res.json()) as Bootstrap;
    setBoot(data);
    if (data.session) {
      setName(data.session.name);
      setEmail(data.session.email);
    }
    return data;
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await refreshBootstrap();
        if (cancelled) return;
        const stored = loadLeagueState();
        if (stored) setLocal(stored);

        if (data.session && stored?.email === data.session.email) {
          const q = data.question;
          if (q?.status === "open") {
            if (stored.guesses[q.id]) {
              setGuessText(String(stored.guesses[q.id].guess));
            }
            setScreen("question");
          } else if (q && stored.guesses[q.id]) {
            setGuessText(String(stored.guesses[q.id].guess));
            setScreen("result");
          } else {
            setScreen("landing");
          }
        }
      } catch {
        if (!cancelled) setLoadError("Lig yüklenemedi. Sayfayı yenileyin.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [refreshBootstrap]);

  useEffect(() => {
    const id = window.setInterval(() => setNowTick(Date.now()), 30000);
    return () => window.clearInterval(id);
  }, []);

  const question = boot?.question ?? null;
  const season = boot?.season;
  const storedGuess = question && local ? local.guesses[question.id] : undefined;

  const persistLocal = (next: LeagueLocalState) => {
    setLocal(next);
    saveLeagueState(next);
  };

  const sendCode = async (isResend = false) => {
    setError(null);
    setInfo(null);
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    if (trimmedName.length < 3) {
      setError("Ad soyad en az 3 karakter olmalı.");
      return;
    }
    if (!/^[a-z0-9._%+-]+@bgts\.com$/.test(trimmedEmail)) {
      setError("Yalnızca @bgts.com e-posta adresi kabul edilir.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/league/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Kod gönderilemedi.");
        return;
      }
      setEmail(trimmedEmail);
      setOtp(["", "", "", "", "", ""]);
      if (!isResend) setScreen("verify");
      else setInfo("Yeni kod gönderildi. Gelen kutunu kontrol et.");
    } catch {
      setError("Bağlantı hatası. Tekrar deneyin.");
    } finally {
      setBusy(false);
    }
  };

  const verifyCode = async () => {
    setError(null);
    const code = otp.join("");
    if (!/^\d{6}$/.test(code)) {
      setError("6 haneli kodu girin.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/league/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Kod doğrulanamadı.");
        return;
      }
      const base: LeagueLocalState =
        local && local.email === data.email
          ? { ...local, name: data.name as string, email: data.email as string }
          : {
              name: data.name as string,
              email: data.email as string,
              guesses: {},
              seasonPts: 0,
            };
      persistLocal(base);
      await refreshBootstrap();
      setScreen("question");
    } catch {
      setError("Bağlantı hatası. Tekrar deneyin.");
    } finally {
      setBusy(false);
    }
  };

  const submitGuess = async () => {
    if (!question || !local) return;
    setError(null);
    const guess = parseGuessInput(guessText);
    if (guess == null) {
      setError("Cevabını sayı olarak yaz (ör. 1396).");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/league/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: question.id, guess }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Tahmin kaydedilemedi.");
        return;
      }

      const participationPts =
        data.participationPts ?? season?.scoring.participation ?? 10;
      const scored = Boolean(data.scored && data.score);
      const stored: Parameters<typeof upsertGuess>[1] = {
        questionId: question.id,
        guess,
        submittedAt: new Date().toISOString(),
        participationPts,
        bonusPts: scored ? data.score.bonus : undefined,
        totalPts: scored ? data.score.total : participationPts,
        band: scored ? data.score.band : "pending",
        revealed: scored,
      };

      const next = upsertGuess(local, stored);
      persistLocal(next);
      setGuessText(String(guess));

      if (scored) {
        setRevealInfo({
          correctAnswer: data.correctAnswer ?? null,
          explanation: data.explanation ?? "",
          score: data.score,
        });
      } else {
        setRevealInfo(null);
      }

      setScreen("result");
    } catch {
      setError("Bağlantı hatası. Tekrar deneyin.");
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    if (screen !== "result" && screen !== "league") return;
    if (!question || question.status !== "revealed") return;
    const guessRecord = local?.guesses[question.id];
    if (!guessRecord || guessRecord.revealed) {
      if (guessRecord?.revealed) {
        setRevealInfo((prev) =>
          prev ?? {
            correctAnswer: null,
            explanation: "",
            score: {
              participation: guessRecord.participationPts,
              bonus: guessRecord.bonusPts ?? 0,
              total: guessRecord.totalPts ?? guessRecord.participationPts,
              band: guessRecord.band ?? "participation",
            },
          }
        );
      }
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/league/reveal?questionId=${encodeURIComponent(question.id)}&guess=${guessRecord.guess}`
        );
        const data = await res.json();
        if (cancelled || !res.ok || !data.revealed) return;
        setRevealInfo({
          correctAnswer: data.correctAnswer ?? null,
          explanation: data.explanation ?? "",
          score: data.score ?? null,
        });
        if (data.score) {
          setLocal((prev) => {
            if (!prev) return prev;
            const current = prev.guesses[question.id];
            if (!current || current.revealed) return prev;
            const next = upsertGuess(prev, {
              ...current,
              bonusPts: data.score.bonus,
              totalPts: data.score.total,
              band: data.score.band,
              revealed: true,
            });
            saveLeagueState(next);
            return next;
          });
        }
      } catch {
        /* ignore */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [screen, question, local]);

  const onOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const onOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const onOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!text) return;
    const next = ["", "", "", "", "", ""];
    for (let i = 0; i < text.length; i++) next[i] = text[i];
    setOtp(next);
    otpRefs.current[Math.min(text.length, 5)]?.focus();
  };

  const boardRows = useMemo(() => {
    if (!season || !local) return [];
    const monthPts = Object.values(local.guesses).reduce((sum, g) => {
      return sum + (g.totalPts ?? g.participationPts);
    }, 0);
    const me = {
      name: local.name,
      pts: boardTab === "month" ? monthPts : local.seasonPts,
      me: true,
    };
    const others = season.atmosphereLeaderboard.map((p) => ({
      name: p.name,
      pts: boardTab === "month" ? p.monthPts : p.seasonPts,
      me: false,
    }));
    return [...others, me].sort((a, b) => b.pts - a.pts).slice(0, 10);
  }, [season, local, boardTab]);

  const myRank = boardRows.findIndex((r) => r.me) + 1;

  const countdownTarget =
    question?.status === "open" || question?.status === "closed"
      ? question.revealAt
      : boot?.nextOpensAt;

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

  if (loadError) {
    return (
      <div className="league-root">
        <div className="league-shell">
          <p className="league-error">{loadError}</p>
        </div>
      </div>
    );
  }

  if (!boot || !season) {
    return (
      <div className="league-root">
        <div className="league-shell">
          <p className="league-sub">Lig yükleniyor…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="league-root">
      <div className="league-glow" aria-hidden />
      <GeometryBackdrop />
      <div className="league-shell">
        {screen !== "announce" && (
          <BrandBar seasonLabel={season.label} monthLeg={season.monthLeg} />
        )}

        <AnimatePresence mode="wait">
          {screen === "announce" && (
            <motion.section
              key="announce"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14, scale: reduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={transition}
              className="league-ann-wrap"
            >
              <p className="league-ann-eyebrow">İnsan Kaynakları · Dahili Duyuru</p>
              <div className="league-ann-card">
                <div className="league-ann-top">
                  <BgtsLockup size="lg" subtitle="Şirketi En İyi Kim Tanıyor?" />
                  <h1 className="league-ann-title">
                    BGTS <em>League</em>
                  </h1>
                  <p className="league-ann-sub">
                    {season.titles.main}
                    <br />
                    {season.titles.sub}
                  </p>
                </div>
                <div className="league-ann-body">
                  <p>{season.announcement.greeting}</p>
                  {season.announcement.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                  <p>
                    <strong>Bu uygulama ile;</strong>
                  </p>
                  <ul className="league-goals">
                    {season.announcement.goals.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                  <p>{season.announcement.closing}</p>
                  <p style={{ whiteSpace: "pre-line", marginTop: 16 }}>
                    {season.announcement.signOff}
                  </p>
                  <button
                    type="button"
                    className="league-btn"
                    onClick={() => setScreen("landing")}
                  >
                    Yarışmaya Katıl →
                  </button>
                </div>
                <div className="league-ann-meta">
                  <span>{season.label}</span>
                  <span>·</span>
                  <span>{season.monthLeg}</span>
                </div>
              </div>
            </motion.section>
          )}

          {screen === "landing" && (
            <motion.section
              key="landing"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={transition}
            >
              <h1 className="league-hero">
                Tahminini yap, <em>ligde yüksel</em>
              </h1>
              <p className="league-lede">
                Her hafta bir soru. Katıl, puan topla, sezon sonunda sürpriz ödüllere yaklaş.
                İpuçları için web sitemizi dolaşmayı unutma.
              </p>
              <div className="league-chip-row">
                <span className="league-chip">Haftalık soru</span>
                <span className="league-chip gold">Aylık zirve</span>
                <span className="league-chip">Sezon ödülleri</span>
              </div>

              <div className="league-grid-2">
                <div className="league-card league-prizes-panel">
                  <div className="league-prizes-title">Sezon Sonu Ödülleri</div>
                  <p className="league-prizes-lead">
                    Zirveye çık, hediyeyi kap. İlk beşe özel sürprizler seni bekliyor.
                  </p>

                  {season.prizes[0] && (
                    <div className="league-prize-hero">
                      <div className="league-prize-hero-media">
                        <Image
                          src={season.prizes[0].image}
                          alt={season.prizes[0].label}
                          width={280}
                          height={280}
                          className="league-prize-img"
                        />
                        <span className="league-prize-badge">1.</span>
                      </div>
                      <div className="league-prize-hero-copy">
                        <p className="league-prize-hook">{season.prizes[0].hook}</p>
                        <h3 className="league-prize-name">{season.prizes[0].label}</h3>
                        {season.prizes[0].detail && (
                          <p className="league-prize-detail">{season.prizes[0].detail}</p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="league-prize-grid">
                    {season.prizes.slice(1).map((p) => (
                      <article key={p.rank} className="league-prize-tile">
                        <div className="league-prize-tile-media">
                          <Image
                            src={p.image}
                            alt={p.label}
                            width={160}
                            height={160}
                            className="league-prize-img"
                          />
                          <span className="league-prize-badge">{p.rank}.</span>
                        </div>
                        <p className="league-prize-hook">{p.hook}</p>
                        <h4 className="league-prize-name">{p.label}</h4>
                        {p.detail && <p className="league-prize-detail">{p.detail}</p>}
                      </article>
                    ))}
                  </div>

                  <p className="league-hint league-prizes-bonus">
                    {season.monthlyBonusNote}
                  </p>
                </div>

                <div className="league-card league-join-pulse">
                  <h2 className="league-screen-title">Hemen katıl</h2>
                  <p className="league-sub">Sadece @bgts.com — 30 saniyede doğrula, tahmine geç.</p>
                  <label htmlFor="league-name">Ad Soyad</label>
                  <input
                    id="league-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="Adın Soyadın"
                  />
                  <label htmlFor="league-email">Kurumsal E-posta</label>
                  <input
                    id="league-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="ad.soyad@bgts.com"
                  />
                  <p className="league-hint">Doğrulama kodu bu adrese gelir.</p>
                  {error && <p className="league-error">{error}</p>}
                  <button
                    type="button"
                    className="league-btn"
                    disabled={busy}
                    onClick={() => void sendCode(false)}
                  >
                    {busy ? "Gönderiliyor…" : "Kodu Al & Başla"}
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {screen === "verify" && (
            <motion.section
              key="verify"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
              className="league-auth-wrap"
            >
              <div className="league-card league-auth-card">
                <p className="league-auth-eyebrow">E-posta doğrulama</p>
                <h2 className="league-screen-title">Tekrar hoş geldin</h2>
                <p className="league-sub league-auth-copy">
                  <strong>{email}</strong> adresine 6 haneli kod gönderdik.
                  Gelen kutunu kontrol et ve kodu aşağıya gir.
                </p>

                <div className="league-otp-row" onPaste={onOtpPaste}>
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      ref={(el) => {
                        otpRefs.current[i] = el;
                      }}
                      inputMode="numeric"
                      autoComplete={i === 0 ? "one-time-code" : "off"}
                      maxLength={1}
                      value={d}
                      onChange={(e) => onOtpChange(i, e.target.value)}
                      onKeyDown={(e) => onOtpKeyDown(i, e)}
                      aria-label={`Kod hanesi ${i + 1}`}
                    />
                  ))}
                </div>

                {error && <p className="league-error">{error}</p>}
                {info && <p className="league-auth-info">{info}</p>}

                <button
                  type="button"
                  className="league-btn league-btn-block"
                  disabled={busy}
                  onClick={() => void verifyCode()}
                >
                  {busy ? "Doğrulanıyor…" : "Kodu Doğrula"}
                </button>

                <div className="league-auth-footer">
                  <button
                    type="button"
                    className="league-link-btn"
                    disabled={busy}
                    onClick={() => void sendCode(true)}
                  >
                    Kodu tekrar gönder
                  </button>
                  <button
                    type="button"
                    className="league-link-btn"
                    disabled={busy}
                    onClick={() => {
                      setError(null);
                      setInfo(null);
                      setScreen("landing");
                    }}
                  >
                    E-postayı değiştir
                  </button>
                </div>

                <p className="league-auth-meta">Kod 10 dakika geçerlidir · @bgts.com</p>
              </div>
            </motion.section>
          )}

          {screen === "question" && (
            <motion.section
              key="question"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
            >
              {!question ? (
                <div className="league-card">
                  <h2 className="league-screen-title">Şu an açık soru yok</h2>
                  <p className="league-sub">
                    {countdownTarget
                      ? `Sonraki adım: ${formatCountdown(countdownTarget, nowTick)}`
                      : "Yeni soru yakında."}
                  </p>
                  {storedGuess && (
                    <button
                      type="button"
                      className="league-btn"
                      onClick={() => setScreen("result")}
                    >
                      Sonucu Gör
                    </button>
                  )}
                  <button
                    type="button"
                    className="league-btn ghost"
                    onClick={() => setScreen("league")}
                  >
                    Lig Tablosu
                  </button>
                </div>
              ) : (
                <>
                  <div className="league-q-meta">
                    {question.monthLabel} Sorusu · Hafta {question.weekIndex}/
                    {question.weekTotal} · {question.department}
                  </div>
                  <h2 className="league-q-prompt">{question.prompt}</h2>
                  <div className="league-card">
                    {storedGuess && (
                      <p className="league-result-badge">
                        Demo: önceki tahminin {storedGuess.guess} — yeniden gönderebilirsin
                      </p>
                    )}
                    <label htmlFor="league-guess">Cevabın</label>
                    <div className="league-guess-field">
                      <input
                        id="league-guess"
                        className="league-guess-input"
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        placeholder="Örn. 1396"
                        value={guessText}
                        onChange={(e) => setGuessText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") void submitGuess();
                        }}
                        aria-label="Tahmin cevabı"
                      />
                    </div>
                    <p className="league-hint">Cevabı klavyeden yazabilirsin.</p>
                    <div className="league-points-legend">
                      <span>
                        <strong>{season.scoring.exact}P</strong>Tam isabet
                      </span>
                      <span>
                        <strong>{season.scoring.nearPts}P</strong>±%{season.scoring.nearPct}
                      </span>
                      <span>
                        <strong>{season.scoring.closePts}P</strong>±%{season.scoring.closePct}
                      </span>
                      <span>
                        <strong>{season.scoring.participation}P</strong>Katılım
                      </span>
                    </div>
                    <p className="league-hint">
                      Katılım puanı hemen yazılır. Doğru cevap ve bonuslar{" "}
                      {new Date(question.revealAt).toLocaleString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      itibarıyla açıklanır.
                    </p>
                    <Link
                      className="league-tip-link"
                      href={localizedHref(locale, question.hintHref)}
                      target="_blank"
                    >
                      İpucu: {question.hintLabel} →
                    </Link>
                    {error && <p className="league-error">{error}</p>}
                    <button
                      type="button"
                      className="league-btn"
                      disabled={busy}
                      onClick={() => void submitGuess()}
                    >
                      {busy
                        ? "Kaydediliyor…"
                        : storedGuess
                          ? "Tahmini Güncelle"
                          : "Tahminimi Gönder"}
                    </button>
                  </div>
                </>
              )}
            </motion.section>
          )}

          {screen === "result" && (
            <motion.section
              key="result"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
            >
              <div className="league-card">
                {revealInfo || storedGuess?.revealed ? (
                  <>
                    <p className="league-result-badge">
                      {revealInfo?.correctAnswer != null || storedGuess?.band === "exact"
                        ? "Skor güncellendi"
                        : "Sonuç"}
                    </p>
                    <h2 className="league-screen-title">Sonuç</h2>
                    <p className="league-sub">
                      Senin tahminin:{" "}
                      <strong style={{ color: "var(--text)" }}>
                        {storedGuess?.guess ?? "—"}
                      </strong>
                      {" · "}
                      Doğru cevap:{" "}
                      <strong style={{ color: "var(--teal)" }}>
                        {revealInfo?.correctAnswer ?? "Netleşecek"}
                      </strong>
                    </p>
                    <div className="league-result-pts">
                      +
                      {revealInfo?.score?.total ??
                        storedGuess?.totalPts ??
                        storedGuess?.participationPts ??
                        10}
                    </div>
                    {revealInfo?.score && (
                      <p className="league-hint">
                        Katılım {revealInfo.score.participation}P
                        {revealInfo.score.bonus > 0
                          ? ` · Bonus ${revealInfo.score.bonus}P (${revealInfo.score.band})`
                          : " · Bonus yok"}
                      </p>
                    )}
                    {revealInfo?.explanation && (
                      <p className="league-sub">{revealInfo.explanation}</p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="league-result-badge">Tahminin kaydedildi</p>
                    <h2 className="league-screen-title">Harika, ligdesin</h2>
                    <div className="league-result-pts">
                      +
                      {storedGuess?.totalPts ??
                        storedGuess?.participationPts ??
                        season.scoring.participation}
                    </div>
                    <p className="league-sub">
                      Katılım puanın eklendi. Tahminin:{" "}
                      <strong style={{ color: "var(--text)" }}>
                        {storedGuess?.guess ?? (guessText || "—")}
                      </strong>
                    </p>
                  </>
                )}

                <div className="league-stat-row">
                  <div className="league-stat">
                    <b>{local?.seasonPts ?? 0}</b>
                    <span>Sezon puanı</span>
                  </div>
                  <div className="league-stat">
                    <b>{myRank > 0 ? `#${myRank}` : "—"}</b>
                    <span>Geçici sıra</span>
                  </div>
                  <div className="league-stat">
                    <b>{Object.keys(local?.guesses ?? {}).length}</b>
                    <span>Katıldığın soru</span>
                  </div>
                </div>

                {countdownTarget && !revealInfo && !storedGuess?.revealed && (
                  <div className="league-countdown">
                    Açıklamaya kalan: {formatCountdown(countdownTarget, nowTick)}
                  </div>
                )}

                <div className="league-actions">
                  <button
                    type="button"
                    className="league-btn"
                    onClick={() => setScreen("league")}
                  >
                    Lig Tablosunu Gör →
                  </button>
                  {question?.status === "open" && (
                    <button
                      type="button"
                      className="league-btn ghost"
                      onClick={() => setScreen("question")}
                    >
                      Tekrar Cevapla
                    </button>
                  )}
                  {question?.hintHref && (
                    <Link
                      className="league-btn ghost"
                      href={localizedHref(locale, question.hintHref)}
                      style={{ textDecoration: "none" }}
                    >
                      Siteye Göz At
                    </Link>
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {screen === "league" && (
            <motion.section
              key="league"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
            >
              <h2 className="league-screen-title">Lig tablosu</h2>
              <p className="league-sub">
                Kişisel puanın gerçek; sıralama atmosferi Phase 1’de örnek satırlarla
                tamamlanır.
              </p>
              <div className="league-toggle" role="tablist">
                <button
                  type="button"
                  className={boardTab === "month" ? "active" : ""}
                  onClick={() => setBoardTab("month")}
                >
                  {season.monthLeg}
                </button>
                <button
                  type="button"
                  className={boardTab === "season" ? "active" : ""}
                  onClick={() => setBoardTab("season")}
                >
                  {season.label}
                </button>
              </div>
              <div className="league-card" style={{ padding: "12px 8px 8px" }}>
                <table className="league-board">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Oyuncu</th>
                      <th>Puan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {boardRows.map((row, i) => (
                      <tr key={`${row.name}-${i}`} className={row.me ? "me" : undefined}>
                        <td className="rank">
                          {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                        </td>
                        <td>{row.me ? `${row.name} (sen)` : row.name}</td>
                        <td>{row.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="league-prize-strip">
                <strong style={{ color: "var(--text)" }}>Sezon ödülleri</strong>
                <div className="league-prize-strip-grid">
                  {season.prizes.map((p) => (
                    <div key={p.rank} className="league-prize-strip-item">
                      <Image
                        src={p.image}
                        alt={p.label}
                        width={96}
                        height={96}
                      />
                      <span>
                        {p.rank}. {p.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="league-actions">
                <button
                  type="button"
                  className="league-btn"
                  onClick={() =>
                    setScreen(question?.status === "open" ? "question" : "result")
                  }
                >
                  Geri Dön
                </button>
                <button
                  type="button"
                  className="league-btn ghost"
                  onClick={() => setScreen("announce")}
                >
                  Duyuruyu Oku
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
