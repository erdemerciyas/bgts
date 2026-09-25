"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";
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

type WizardStatus = "idle" | "submitting" | "success";

type Props = {
    dict: ScholarshipDict;
    /** Başarı ekranındaki bağlantı. */
    doneHref: string;
    doneLabel: string;
};

// Hassas veri: taslak yalnızca sessionStorage'da (sekme kapanınca silinir) tutulur.
const DRAFT_KEY = "bgts-scholarship-draft";
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

export default function ScholarshipWizard({ dict, doneHref, doneLabel }: Props) {
    const reduce = useReducedMotion();
    const [initial] = useState(readDraft);
    const [data, setData] = useState<ScholarshipData>(initial?.data ?? EMPTY_SCHOLARSHIP);
    const [step, setStep] = useState(initial?.step ?? 0);
    const [maxStep, setMaxStep] = useState(initial?.maxStep ?? 0);
    const [direction, setDirection] = useState(1);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [shake, setShake] = useState(0);
    const [status, setStatus] = useState<WizardStatus>("idle");
    const [sendError, setSendError] = useState<string | null>(null);

    const rootRef = useRef<HTMLDivElement>(null);
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

    const scrollToTop = useCallback(() => {
        const top = rootRef.current?.getBoundingClientRect().top ?? 0;
        // Kartın üstü sabit header'ın (~80px) altında kalıyorsa, 112px pay bırakarak yukarı kaydırılır.
        if (top < 112) window.scrollTo({ top: window.scrollY + top - 112, behavior: reduce ? "auto" : "smooth" });
    }, [reduce]);

    const goTo = useCallback(
        (target: number) => {
            setDirection(target > step ? 1 : -1);
            setStep(target);
            setSendError(null);
            scrollToTop();
        },
        [step, scrollToTop]
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

    const showServerErrors = (e: Record<string, string>) => {
        showErrors(e);
        const first = Math.min(...Object.keys(e).map(stepOfPath).filter((i) => i >= 0));
        if (Number.isFinite(first) && first !== step) goTo(first);
    };

    /* ── Gönderim ── */
    const submit = async () => {
        const result = validateScholarship(data);
        if (!result.success) return showServerErrors(result.errors);

        setStatus("submitting");
        setSendError(null);
        try {
            const res = await fetch("/api/scholarship", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data,
                    website: honeypotRef.current?.value ?? "",
                }),
            });
            if (res.ok) {
                writeDraft(null);
                setStatus("success");
                scrollToTop();
                return;
            }
            const body = (await res.json().catch(() => ({}))) as { code?: string; errors?: Record<string, string> };
            if (res.status === 429) setSendError(dict.errors.rateLimit);
            else if (body.errors && Object.keys(body.errors).length) showServerErrors(body.errors);
            else setSendError(dict.errors.send);
        } catch {
            setSendError(dict.errors.send);
        }
        setStatus("idle");
    };

    /* ── Animasyonlar ── */
    const stepVariants: Variants = {
        enter: (dir: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: dir * 48 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: dir * -48 }),
    };

    const stepProps: StepProps = { data, update, err, dict };
    const StepComponent = STEPS[step];
    const isReview = step === REVIEW_STEP;
    const canSubmit = data.kvkkRead && data.consent && status === "idle";
    const stepLabel = dict.stepOf.replace("{current}", String(step + 1)).replace("{total}", String(STEP_COUNT));

    if (status === "success") {
        return (
            <div ref={rootRef}>
                <SuccessView dict={dict} reduce={!!reduce} doneHref={doneHref} doneLabel={doneLabel} />
            </div>
        );
    }

    return (
        <div ref={rootRef} className="flex flex-col">
            <WizardStepper steps={dict.steps} current={step} maxStep={maxStep} label={stepLabel} onJump={jump} />

            <div
                ref={bodyRef}
                className="relative overflow-x-hidden px-5 py-6 sm:px-8"
            >
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
                                <div className="mb-5">
                                    <h3 className="text-base font-bold text-slate-900 sm:text-lg">{dict.steps[step].title}</h3>
                                    <p className="mt-0.5 text-sm text-slate-500">{dict.steps[step].description}</p>
                                </div>
                                {isReview ? (
                                    <ReviewStep {...stepProps} onEdit={goTo} />
                                ) : (
                                    <StepComponent {...stepProps} />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </ShakeContext.Provider>
                </form>
            </div>

            {/* Alt çubuk */}
            <footer className="sticky bottom-0 z-10 shrink-0 rounded-b-3xl border-t border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
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
        </div>
    );
}

function SuccessView({
    dict, reduce, doneHref, doneLabel,
}: { dict: ScholarshipDict; reduce: boolean; doneHref: string; doneLabel: string }) {
    const draw = (delay: number) => ({
        initial: { pathLength: reduce ? 1 : 0, opacity: reduce ? 0 : 1 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: reduce ? 0.2 : 0.6, delay: reduce ? 0 : delay, ease: [0.65, 0, 0.35, 1] as const },
    });
    const buttonClass =
        "mt-8 inline-block rounded-xl bg-[#0056A7] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-[#004a90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2";

    return (
        <div role="status" className="flex flex-col items-center justify-center px-6 py-14 text-center">
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
                <Link href={doneHref} className={buttonClass}>
                    {doneLabel}
                </Link>
            </motion.div>
        </div>
    );
}
