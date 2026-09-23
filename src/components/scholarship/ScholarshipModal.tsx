"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, GraduationCap, Loader2, Send, X } from "lucide-react";
import {
    EMPTY_SCHOLARSHIP,
    STEP_COUNT,
    stepOfPath,
    validateScholarship,
    validateStep,
    type ScholarshipData,
} from "@/lib/scholarship/schema";
import { ShakeContext } from "./fields";
import WizardStepper from "./WizardStepper";
import PersonalStep from "./steps/PersonalStep";
import EducationStep from "./steps/EducationStep";
import FamilyStep from "./steps/FamilyStep";
import SiblingsStep from "./steps/SiblingsStep";
import ContactStep from "./steps/ContactStep";
import ReviewStep from "./steps/ReviewStep";
import type { ScholarshipDict, StepProps } from "./types";

type Props = {
    open: boolean;
    onClose: () => void;
    dict: ScholarshipDict;
    lang: string;
};

// Hassas veri: taslak yalnızca sessionStorage'da (sekme kapanınca silinir) tutulur.
const DRAFT_KEY = "bgts-scholarship-draft";
// Cloudflare test anahtarı her zaman geçer — yalnızca geliştirmede yedek olarak kullanılır.
const SITE_KEY =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
    (process.env.NODE_ENV !== "production" ? "1x00000000000000000000AA" : "");

const STEPS: ComponentType<StepProps>[] = [PersonalStep, EducationStep, FamilyStep, SiblingsStep, ContactStep];
const REVIEW_STEP = STEP_COUNT - 1;
const EMPTY_JSON = JSON.stringify(EMPTY_SCHOLARSHIP);

type Draft = { data: ScholarshipData; step: number; maxStep: number };

function readDraft(): Draft | null {
    try {
        const raw = sessionStorage.getItem(DRAFT_KEY);
        if (!raw) return null;
        const draft = JSON.parse(raw) as Partial<Draft>;
        const clamp = (n: unknown) => Math.min(Math.max(Number(n) || 0, 0), REVIEW_STEP);
        return { data: { ...EMPTY_SCHOLARSHIP, ...draft.data }, step: clamp(draft.step), maxStep: clamp(draft.maxStep) };
    } catch {
        return null;
    }
}

function writeDraft(draft: Draft | null) {
    try {
        if (draft) sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
        else sessionStorage.removeItem(DRAFT_KEY);
    } catch {
        /* storage erişilemez (gizli mod vb.) — taslak tutulmaz */
    }
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

export default function ScholarshipModal({ open, onClose, dict, lang }: Props) {
    const reduce = useReducedMotion();
    const [initial] = useState(readDraft);
    const [data, setData] = useState<ScholarshipData>(initial?.data ?? EMPTY_SCHOLARSHIP);
    const [step, setStep] = useState(initial?.step ?? 0);
    const [maxStep, setMaxStep] = useState(initial?.maxStep ?? 0);
    const [direction, setDirection] = useState(1);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [shake, setShake] = useState(0);
    const [token, setToken] = useState<string | null>(null);
    const [turnstileKey, setTurnstileKey] = useState(0);
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [sendError, setSendError] = useState<string | null>(null);
    const [confirmExit, setConfirmExit] = useState(false);

    const panelRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const honeypotRef = useRef<HTMLInputElement>(null);
    const pendingFocus = useRef(false);

    const dirty = useMemo(() => JSON.stringify(data) !== EMPTY_JSON, [data]);

    /* ── Taslak ── */
    useEffect(() => {
        if (status === "success") return;
        writeDraft(dirty ? { data, step, maxStep } : null);
    }, [data, step, maxStep, dirty, status]);

    /* ── Veri & hata yönetimi ── */
    const update = useCallback<StepProps["update"]>((patch, clear) => {
        setData((d) => ({ ...d, ...patch }));
        const keys = clear ?? Object.keys(patch);
        setErrors((e) => {
            const next = { ...e };
            let changed = false;
            for (const path of Object.keys(next)) {
                if (keys.some((k) => path === k || (!clear && path.startsWith(`${k}.`)))) {
                    delete next[path];
                    changed = true;
                }
            }
            return changed ? next : e;
        });
    }, []);

    const err = useCallback(
        (path: string) => {
            const code = errors[path];
            if (!code) return undefined;
            return (dict.errors as Record<string, string>)[code] ?? dict.errors.required;
        },
        [errors, dict]
    );

    const focusFirstError = useCallback(() => {
        if (!pendingFocus.current) return;
        const el = bodyRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
        if (el) {
            pendingFocus.current = false;
            el.focus({ preventScroll: true });
            el.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
        }
    }, [reduce]);

    const showErrors = useCallback((e: Record<string, string>) => {
        setErrors(e);
        setShake((n) => n + 1);
        pendingFocus.current = true;
    }, []);

    // Aynı adımda kalınan hatalarda odak, render sonrası ilk hatalı alana taşınır.
    useEffect(() => {
        if (!shake) return;
        const id = requestAnimationFrame(focusFirstError);
        return () => cancelAnimationFrame(id);
    }, [shake, focusFirstError]);

    const goTo = useCallback(
        (target: number) => {
            setDirection(target > step ? 1 : -1);
            setStep(target);
            setSendError(null);
            bodyRef.current?.scrollTo({ top: 0 });
        },
        [step]
    );

    const next = () => {
        const e = validateStep(step, data);
        if (Object.keys(e).length) return showErrors(e);
        setErrors({});
        setMaxStep((m) => Math.max(m, step + 1));
        goTo(step + 1);
    };

    const jump = (target: number) => {
        if (target > step) {
            const e = validateStep(step, data);
            if (Object.keys(e).length) return showErrors(e);
        }
        goTo(target);
    };

    /* ── Gönderim ── */
    const submit = async () => {
        const result = validateScholarship(data);
        if (!result.success) {
            showErrors(result.errors);
            const first = Math.min(...Object.keys(result.errors).map(stepOfPath).filter((i) => i >= 0));
            if (Number.isFinite(first) && first !== step) goTo(first);
            return;
        }
        if (!token) {
            setSendError(dict.errors.turnstile);
            return;
        }

        setStatus("submitting");
        setSendError(null);
        try {
            const res = await fetch("/api/scholarship", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data, turnstileToken: token, website: honeypotRef.current?.value ?? "" }),
            });
            if (res.ok) {
                writeDraft(null);
                setStatus("success");
                return;
            }
            const body = (await res.json().catch(() => ({}))) as { code?: string; errors?: Record<string, string> };
            if (res.status === 429) setSendError(dict.errors.rateLimit);
            else if (body.code === "turnstile") setSendError(dict.errors.turnstile);
            else if (body.errors && Object.keys(body.errors).length) {
                showErrors(body.errors);
                const first = Math.min(...Object.keys(body.errors).map(stepOfPath).filter((i) => i >= 0));
                if (Number.isFinite(first) && first !== step) goTo(first);
            } else setSendError(dict.errors.send);
        } catch {
            setSendError(dict.errors.send);
        }
        // Turnstile token'ı tek kullanımlıktır; her denemeden sonra widget yenilenir.
        setStatus("idle");
        setToken(null);
        setTurnstileKey((k) => k + 1);
    };

    /* ── Kapatma ── */
    const reset = () => {
        setData(EMPTY_SCHOLARSHIP);
        setStep(0);
        setMaxStep(0);
        setErrors({});
        setStatus("idle");
        setSendError(null);
    };

    const requestClose = () => {
        if (status === "submitting") return;
        if (status === "success") {
            onClose();
            reset();
        } else if (dirty) setConfirmExit(true);
        else onClose();
    };

    // ESC: açık onay penceresini kapatır, yoksa kapatma isteği başlatır (her render'da güncel state'i görür).
    const escapeRef = useRef<() => void>(() => {});
    useEffect(() => {
        escapeRef.current = () => (confirmExit ? setConfirmExit(false) : requestClose());
    });

    /* ── ESC, focus trap, scroll lock, odak iadesi ── */
    useEffect(() => {
        if (!open) return;
        const previouslyFocused = document.activeElement as HTMLElement | null;
        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";
        const focusTimer = window.setTimeout(() => panelRef.current?.focus(), 50);

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                escapeRef.current();
                return;
            }
            if (e.key !== "Tab" || !panelRef.current) return;
            const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
                (el) => el.offsetParent !== null || el === document.activeElement
            );
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            window.clearTimeout(focusTimer);
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = overflow;
            previouslyFocused?.focus?.();
        };
    }, [open]);

    /* ── Animasyonlar ── */
    const stepVariants: Variants = {
        enter: (dir: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: dir * 48 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: dir * -48 }),
    };

    const stepProps: StepProps = { data, update, err, dict };
    const StepComponent = STEPS[step];
    const isReview = step === REVIEW_STEP;
    const canSubmit = data.kvkkRead && data.consent && !!token && status === "idle";
    const stepLabel = dict.stepOf.replace("{current}", String(step + 1)).replace("{total}", String(STEP_COUNT));

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    key="scholarship-backdrop"
                    className="fixed inset-0 z-[100000] flex items-end justify-center bg-slate-950/60 backdrop-blur-sm sm:items-center sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) requestClose();
                    }}
                >
                    <motion.div
                        ref={panelRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="sch-title"
                        aria-describedby="sch-subtitle"
                        tabIndex={-1}
                        className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-white shadow-2xl outline-none sm:h-auto sm:max-h-[min(92dvh,880px)] sm:max-w-3xl sm:rounded-3xl"
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48, scale: 0.97 }}
                        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.98 }}
                        transition={reduce ? { duration: 0.2 } : { type: "spring", stiffness: 320, damping: 30 }}
                    >
                        {/* Başlık */}
                        <header className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#003a73] via-[#0056A7] to-[#1a73c9] px-5 py-5 text-white sm:px-8 sm:py-6">
                            <div aria-hidden className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                            <div className="relative flex items-start gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                                    <GraduationCap className="h-6 w-6" />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <h2 id="sch-title" className="text-lg font-bold leading-tight sm:text-xl">{dict.title}</h2>
                                    <p id="sch-subtitle" className="mt-1 text-sm text-blue-100">
                                        {status === "success" ? dict.success.title : dict.steps[step].description}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={requestClose}
                                    aria-label={dict.close}
                                    className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </header>

                        {status === "success" ? (
                            <SuccessView dict={dict} reduce={!!reduce} onClose={requestClose} />
                        ) : (
                            <>
                                <WizardStepper steps={dict.steps} current={step} maxStep={maxStep} label={stepLabel} onJump={jump} />

                                <div ref={bodyRef} className="relative flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-5 py-6 sm:px-8">
                                    <form
                                        noValidate
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (isReview) void submit();
                                            else next();
                                        }}
                                        id="sch-form"
                                    >
                                        {/* Honeypot — kullanıcılara görünmez */}
                                        <input
                                            ref={honeypotRef}
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            aria-hidden="true"
                                            className="absolute -left-[9999px] h-px w-px opacity-0"
                                        />
                                        <ShakeContext.Provider value={shake}>
                                            <AnimatePresence mode="wait" custom={direction} initial={false}>
                                                <motion.div
                                                    key={step}
                                                    custom={direction}
                                                    variants={stepVariants}
                                                    initial="enter"
                                                    animate="center"
                                                    exit="exit"
                                                    transition={{ duration: reduce ? 0.15 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                                                    onAnimationComplete={focusFirstError}
                                                >
                                                    <h3 className="mb-5 text-base font-bold text-slate-900 sm:text-lg">{dict.steps[step].title}</h3>
                                                    {isReview ? (
                                                        <ReviewStep
                                                            key={turnstileKey}
                                                            {...stepProps}
                                                            lang={lang}
                                                            siteKey={SITE_KEY}
                                                            onEdit={goTo}
                                                            onToken={setToken}
                                                        />
                                                    ) : (
                                                        <StepComponent {...stepProps} />
                                                    )}
                                                </motion.div>
                                            </AnimatePresence>
                                        </ShakeContext.Provider>
                                    </form>
                                </div>

                                {/* Alt çubuk */}
                                <footer className="shrink-0 border-t border-slate-100 bg-white px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
                                    <AnimatePresence>
                                        {sendError && (
                                            <motion.p
                                                role="alert"
                                                initial={{ opacity: 0, y: 4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="mb-3 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700"
                                            >
                                                {sendError}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                    <div className="flex items-center justify-between gap-3">
                                        <button
                                            type="button"
                                            onClick={() => goTo(step - 1)}
                                            disabled={step === 0 || status === "submitting"}
                                            className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:invisible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                                        >
                                            <ArrowLeft className="h-4 w-4" />
                                            {dict.back}
                                        </button>
                                        <button
                                            type="submit"
                                            form="sch-form"
                                            disabled={isReview && !canSubmit}
                                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                                        >
                                            {isReview ? (
                                                status === "submitting" ? (
                                                    <>
                                                        <Loader2 className="h-4 w-4 animate-spin" />
                                                        {dict.submitting}
                                                    </>
                                                ) : (
                                                    <>
                                                        {dict.submit}
                                                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                                    </>
                                                )
                                            ) : (
                                                <>
                                                    {dict.next}
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </footer>
                            </>
                        )}

                        {/* Çıkış onayı */}
                        <AnimatePresence>
                            {confirmExit && (
                                <motion.div
                                    className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 p-6 backdrop-blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.div
                                        role="alertdialog"
                                        aria-modal="true"
                                        aria-labelledby="sch-exit-title"
                                        aria-describedby="sch-exit-message"
                                        className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
                                        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 8 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    >
                                        <h3 id="sch-exit-title" className="text-base font-bold text-slate-900">{dict.exit.title}</h3>
                                        <p id="sch-exit-message" className="mt-2 text-sm text-slate-600">{dict.exit.message}</p>
                                        <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setConfirmExit(false);
                                                    onClose();
                                                }}
                                                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                                            >
                                                {dict.exit.leave}
                                            </button>
                                            <button
                                                type="button"
                                                autoFocus
                                                onClick={() => setConfirmExit(false)}
                                                className="rounded-xl bg-[#0056A7] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#004a90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                                            >
                                                {dict.exit.stay}
                                            </button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

function SuccessView({ dict, reduce, onClose }: { dict: ScholarshipDict; reduce: boolean; onClose: () => void }) {
    const draw = (delay: number) => ({
        initial: { pathLength: reduce ? 1 : 0, opacity: reduce ? 0 : 1 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: reduce ? 0.2 : 0.6, delay: reduce ? 0 : delay, ease: [0.65, 0, 0.35, 1] as const },
    });

    return (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-14 text-center">
            <svg viewBox="0 0 96 96" className="h-24 w-24" aria-hidden>
                <motion.circle cx="48" cy="48" r="42" fill="none" stroke="#dbeafe" strokeWidth="6" {...draw(0)} />
                <motion.circle
                    cx="48" cy="48" r="42" fill="none" stroke="#0056A7" strokeWidth="6" strokeLinecap="round"
                    style={{ rotate: -90, transformOrigin: "50% 50%" }}
                    {...draw(0.1)}
                />
                <motion.path
                    d="M30 49 L43 62 L67 36" fill="none" stroke="#0056A7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                    {...draw(0.55)}
                />
            </svg>
            <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.8, duration: 0.4 }}
            >
                <h3 className="mt-6 text-xl font-bold text-slate-900">{dict.success.title}</h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">{dict.success.message}</p>
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-8 rounded-xl bg-[#0056A7] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-[#004a90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                >
                    {dict.success.close}
                </button>
            </motion.div>
        </div>
    );
}
