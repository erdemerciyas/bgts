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
import { getLeagueAbsoluteUrl, getLeagueDisplayUrl } from "@/lib/league/urls";
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

function BrandBar() {
  return (
    <div className="league-brand">
      <Image
        src="/BGTS_logo_white.png"
        alt="BGTS"
        width={140}
        height={34}
        priority
        className="league-logo-img"
      />
    </div>
  );
}

const PRIZE_MEDALS = ["🥇", "🥈", "🥉"];

const LANDING_FEATURES = [
  { icon: "📣", text: "Bu ayın tahmini yayında" },
  { icon: "✉️", text: "BGTS e-posta adresinle giriş yap" },
  { icon: "🎯", text: "Tahminini yap, puanını topla" },
  { icon: "📈", text: "Sezon boyunca ligde yüksel" },
];

function formatCountdown(targetIso: string, nowMs: number): string {
  const diff = new Date(targetIso).getTime() - nowMs;
  if (diff <= 0) return "çok yakında";
  const totalMin = Math.floor(diff / 60000);
  const days = Math.floor(totalMin / (60 * 24));
  const hours = Math.floor((totalMin % (60 * 24)) / 60);
  const mins = totalMin % 60;
  if (days > 0) return `${days} gün ${hours} saat ${mins} dk`;
  if (hours > 0) return `${hours} saat ${mins} dk`;
  return `${mins} dk`;
}

function formatRevealDate(iso: string): string {
  return new Date(iso).toLocaleString("tr-TR", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatNextQuestionDate(iso: string): string {
  return (
    new Date(iso).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
    }) + " 09:00"
  );
}

function parseGuessInput(raw: string): number | null {
  const cleaned = raw.trim().replace(/\s/g, "").replace(/,/g, "");
  if (!cleaned) return null;
  if (!/^\d+$/.test(cleaned)) return null;
  const n = Number.parseInt(cleaned, 10);
  if (!Number.isFinite(n) || n < 0 || n > 999999) return null;
  return n;
}

function monthTabLabel(monthLeg: string): string {
  return monthLeg.replace(/\s*Ayağı\s*$/, "");
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
      setError("Lütfen ad soyad gir.");
      return;
    }
    if (!/^[a-z0-9._%+-]+@bgts\.com$/.test(trimmedEmail)) {
      setError("Geçerli bir @bgts.com adresi gerekli.");
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

  const adjustGuess = (delta: number) => {
    const current = parseGuessInput(guessText) ?? 0;
    const next = Math.max(0, Math.min(999, current + delta));
    setGuessText(String(next));
  };

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
  const participantCount = boardRows.length * 14;

  const countdownTarget =
    question?.status === "open" || question?.status === "closed"
      ? question.revealAt
      : boot?.nextOpensAt;

  const nextQuestionTarget = boot?.nextOpensAt ?? question?.opensAt ?? null;

  const monthPts = useMemo(() => {
    if (!local) return 0;
    return Object.values(local.guesses).reduce(
      (sum, g) => sum + (g.totalPts ?? g.participationPts),
      0
    );
  }, [local]);

  const isRevealed = Boolean(revealInfo || storedGuess?.revealed);
  const earnedPts =
    revealInfo?.score?.total ??
    storedGuess?.totalPts ??
    storedGuess?.participationPts ??
    season?.scoring.participation ??
    10;

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const };

  const shellClass = "league-shell";

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
    <div
      className={`league-root${screen === "announce" ? " league-on-announce" : ""}`}
    >
      <div className={shellClass}>
        {screen !== "announce" && <BrandBar />}

        <AnimatePresence mode="wait">
          {screen === "announce" && (
            <motion.section
              key="announce"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
              className="league-ann-wrap"
            >
              <div className="league-ann-card">
                <div className="league-ann-top">
                  <Image
                    src="/BGTS_logo_white.png"
                    alt="BGTS"
                    width={180}
                    height={48}
                    priority
                    className="league-ann-logo"
                  />
                  <h1 className="league-ann-title">
                    BGTS <em>Lig</em> başlıyor! 🏆
                  </h1>
                </div>
                <div className="league-ann-body">
                  <p className="league-ann-text">
                    Bu ayın tahmini yayında. Tahminini yap, puanını topla, ligde yüksel.
                  </p>
                  <p className="league-ann-text">
                    Sezon sonunda zirvedekileri <b>sürpriz hediyeler</b> bekliyor. 🎁
                  </p>
                  <div className="league-ann-cta">
                    <button
                      type="button"
                      className="league-btn"
                      onClick={() => setScreen("landing")}
                    >
                      Tahminimi Yap →
                    </button>
                    <a
                      href={getLeagueAbsoluteUrl(locale)}
                      className="league-ann-link"
                    >
                      {getLeagueDisplayUrl(locale)}
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {screen === "landing" && (
            <motion.section
              key="landing"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
              className="league-landing-stack"
            >
              <div className="league-card league-block">
                <div className="league-block-label">Nasıl Çalışır?</div>
                <h2 className="league-screen-title league-screen-title--sm">
                  Yarışmaya Katıl
                </h2>
                <ul className="league-feat-list">
                  {LANDING_FEATURES.map((f) => (
                    <li key={f.text}>
                      <span className="league-feat-icon">{f.icon}</span>
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="league-card league-block">
                <div className="league-block-label">Katılım Formu</div>
                <label htmlFor="league-name">Ad Soyad</label>
                <input
                  id="league-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Ör. Deniz Yılmaz"
                />
                <label htmlFor="league-email">BGTS E-posta Adresi</label>
                <input
                  id="league-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="ad.soyad@bgts.com"
                />
                <p className="league-hint">
                  Sadece <b>@bgts.com</b> uzantılı adresler kabul edilir.
                </p>
                {error && <p className="league-error">{error}</p>}
                <button
                  type="button"
                  className="league-btn league-btn-block"
                  disabled={busy}
                  onClick={() => void sendCode(false)}
                >
                  {busy ? "Gönderiliyor…" : "Doğrulama Kodu Gönder"}
                </button>
              </div>

              <div className="league-card league-block">
                <div className="league-block-label">🏆 Sezon Sonu Ödülleri</div>
                <div className="league-prz-grid">
                  {season.prizes.slice(0, 3).map((p, i) => (
                    <div key={p.rank} className={`league-prz${i === 0 ? " p1" : ""}`}>
                      <div className="league-prz-photo">
                        <Image
                          src={p.image}
                          alt={p.label}
                          width={120}
                          height={80}
                        />
                      </div>
                      <div className="league-prz-rank">{PRIZE_MEDALS[i] ?? `${p.rank}.`}</div>
                      <div className="league-prz-name">{p.label}</div>
                    </div>
                  ))}
                </div>
                <p className="league-prize-foot">{season.monthlyBonusNote} 🎁</p>
              </div>
            </motion.section>
          )}

          {screen === "verify" && (
            <motion.section
              key="verify"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
              className="league-auth-section"
            >
              <h2 className="league-screen-title">E-postanı doğrula</h2>
              <p className="league-sub">
                <b>{email}</b> adresine 6 haneli tek
                kullanımlık kod gönderildi. Kod 10 dakika geçerlidir.
              </p>
              <div className="league-card league-auth-card">
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
                {info && <p className="league-info">{info}</p>}
                <div className="league-auth-actions">
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
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {screen === "question" && (
            <motion.section
              key="question"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
              className="league-flow-section"
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
                  <div className="league-q-label">
                    {question.monthLabel} Sorusu · Soru {question.weekIndex}/
                    {question.weekTotal}
                  </div>
                  <h2 className="league-q-text">{question.prompt}</h2>
                  <div className="league-card">
                    {storedGuess && (
                      <p className="league-hint league-hint--spaced">
                        Önceki tahminin: <b>{storedGuess.guess}</b> — yeniden gönderebilirsin
                      </p>
                    )}
                    <div className="league-guess-board">
                      <button
                        type="button"
                        className="league-guess-btn"
                        aria-label="Azalt"
                        onClick={() => adjustGuess(-1)}
                      >
                        −
                      </button>
                      <div className="league-guess-value">
                        <input
                          id="league-guess"
                          inputMode="numeric"
                          autoComplete="off"
                          placeholder="0"
                          value={guessText}
                          onChange={(e) =>
                            setGuessText(e.target.value.replace(/\D/g, "").slice(0, 6))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") void submitGuess();
                            if (e.key === "ArrowUp") {
                              e.preventDefault();
                              adjustGuess(1);
                            }
                            if (e.key === "ArrowDown") {
                              e.preventDefault();
                              adjustGuess(-1);
                            }
                          }}
                          aria-label="Tahminin"
                        />
                      </div>
                      <button
                        type="button"
                        className="league-guess-btn"
                        aria-label="Artır"
                        onClick={() => adjustGuess(1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="league-guess-caption">
                      Tahminini yaz ya da ok tuşlarıyla ayarla
                    </p>

                    <div className="league-tip">
                      💡{" "}
                      <span>
                        <b>İpucu:</b> Cevabı bulmak için{" "}
                        <Link href={localizedHref(locale, question.hintHref)} target="_blank">
                          {question.hintLabel}
                        </Link>{" "}
                        ziyaret edebilirsin. Bazı aylar soru tamamen tahmine dayalı olur — bu
                        ay cevap sitede saklı.
                      </span>
                    </div>

                    <div className="league-points-legend">
                      <span className="league-pt">
                        Doğru cevap <b>{season.scoring.exact} P</b>
                      </span>
                      <span className="league-pt">
                        En yakın tahmin <b>{season.scoring.nearPts} P</b>
                      </span>
                      <span className="league-pt">
                        Yakın tahmin <b>{season.scoring.closePts} P</b>
                      </span>
                      <span className="league-pt">
                        Katılım <b>{season.scoring.participation} P</b>
                      </span>
                    </div>
                    <p className="league-hint league-hint--center">
                      Katılım puanı anında hesabına geçer. Doğru cevap ve en yakın tahmin
                      puanları, tüm tahminler toplandıktan sonra <b>ay sonunda</b> açıklanır.
                    </p>
                    {error && <p className="league-error">{error}</p>}
                    <div className="league-card-actions">
                      <button
                        type="button"
                        className="league-btn league-btn-block"
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
                  </div>
                </>
              )}
            </motion.section>
          )}

          {screen === "result" && (
            <motion.section
              key="result"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
              className="league-result-section"
            >
              <div className="league-result-hero">
                <span className="league-badge">
                  {isRevealed ? "Skor güncellendi" : "✓ Tahminin kaydedildi"}
                </span>
                <div className="league-earned">+{earnedPts}</div>
                <div className="league-earned-label">
                  {isRevealed ? "toplam puanın güncellendi" : "katılım puanı hesabına geçti"}
                </div>
                {isRevealed ? (
                  <p className="league-deferred-note">
                    Senin tahminin: <b>{storedGuess?.guess ?? "—"}</b> · Doğru cevap:{" "}
                    <b>{revealInfo?.correctAnswer ?? "—"}</b>
                    {revealInfo?.explanation ? (
                      <>
                        <br />
                        {revealInfo.explanation}
                      </>
                    ) : null}
                  </p>
                ) : (
                  <p className="league-deferred-note">
                    🔒 Tahminin: <b>{storedGuess?.guess ?? guessText ?? "—"}</b> · Doğru
                    cevap ve <b>en yakın tahmin</b> bonusları ({season.scoring.exact} /{" "}
                    {season.scoring.nearPts} / {season.scoring.closePts} P){" "}
                    {question ? (
                      <b>{formatRevealDate(question.revealAt)}</b>
                    ) : (
                      <b>ay sonunda</b>
                    )}
                    &apos;de açıklanacak.
                  </p>
                )}
              </div>

              <div className="league-stat-row">
                <div className="league-stat">
                  <div className="v">{local?.seasonPts ?? monthPts}</div>
                  <div className="k">Toplam puanın</div>
                </div>
                <div className="league-stat">
                  <div className="v">{myRank > 0 ? `${myRank}.` : "—"}</div>
                  <div className="k">Bu ayki sıralaman</div>
                </div>
                <div className="league-stat">
                  <div className="v">{participantCount || "—"}</div>
                  <div className="k">Katılımcı</div>
                </div>
              </div>

              {nextQuestionTarget && (
                <p className="league-countdown-note">
                  Sonraki soru <b>{formatNextQuestionDate(nextQuestionTarget)}</b> tarihinde
                  açılacak · <b>{formatCountdown(nextQuestionTarget, nowTick)}</b>
                </p>
              )}

              <div className="league-center-actions">
                <button
                  type="button"
                  className="league-btn"
                  onClick={() => setScreen("league")}
                >
                  Lig Tablosunu Gör
                </button>
              </div>
            </motion.section>
          )}

          {screen === "league" && (
            <motion.section
              key="league"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={transition}
              className="league-flow-section"
            >
              <div className="league-lg-head">
                <h2 className="league-screen-title league-screen-title--flush">
                  Lig Tablosu
                </h2>
                <div className="league-toggle" role="tablist" aria-label="Lig dönemi">
                  <button
                    type="button"
                    className={boardTab === "month" ? "active" : ""}
                    role="tab"
                    aria-selected={boardTab === "month"}
                    onClick={() => setBoardTab("month")}
                  >
                    {monthTabLabel(season.monthLeg)}
                  </button>
                  <button
                    type="button"
                    className={boardTab === "season" ? "active" : ""}
                    role="tab"
                    aria-selected={boardTab === "season"}
                    onClick={() => setBoardTab("season")}
                  >
                    {season.label}
                  </button>
                </div>
              </div>

              <div className="league-card league-card--board">
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
                          {PRIZE_MEDALS[i] ?? ""}
                          {i + 1}
                        </td>
                        <td>{row.me ? `${row.name} (sen)` : row.name}</td>
                        <td className="pts">{row.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="league-prize-strip">
                {season.prizes.slice(0, 3).map((p, i) => (
                  <span key={p.rank} className="league-ps-item">
                    {PRIZE_MEDALS[i]} {p.label}
                  </span>
                ))}
              </div>

              {nextQuestionTarget && (
                <p className="league-countdown-note">
                  Bir sonraki soru: <b>{formatNextQuestionDate(nextQuestionTarget)}</b> ·
                  Puanını korumak için her ay geri gel 🏁
                </p>
              )}

              <div className="league-center-actions">
                <button
                  type="button"
                  className="league-btn ghost"
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setGuessText("");
                    setOtp(["", "", "", "", "", ""]);
                    setRevealInfo(null);
                    setError(null);
                    setInfo(null);
                    setScreen("announce");
                  }}
                >
                  Demoyu Baştan Başlat
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
