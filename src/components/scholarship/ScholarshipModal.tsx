"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GraduationCap, X } from "lucide-react";
import ScholarshipWizard, { type WizardStatus } from "./ScholarshipWizard";
import type { ScholarshipDict } from "./types";

type Props = {
    open: boolean;
    onClose: () => void;
    dict: ScholarshipDict;
    lang: string;
};

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

export default function ScholarshipModal({ open, onClose, dict, lang }: Props) {
    const reduce = useReducedMotion();
    const [confirmExit, setConfirmExit] = useState(false);
    // Başarılı gönderimden sonra kapatınca wizard sıfırdan başlasın diye yeniden mount edilir.
    const [wizardKey, setWizardKey] = useState(0);
    const panelRef = useRef<HTMLDivElement>(null);
    const wizardState = useRef<{ dirty: boolean; status: WizardStatus }>({ dirty: false, status: "idle" });

    const onStateChange = useCallback((state: { dirty: boolean; status: WizardStatus }) => {
        wizardState.current = state;
    }, []);

    const finish = () => {
        onClose();
        setWizardKey((k) => k + 1);
    };

    const requestClose = () => {
        const { dirty, status } = wizardState.current;
        if (status === "submitting") return;
        if (status === "success") finish();
        else if (dirty) setConfirmExit(true);
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
                                    <p id="sch-subtitle" className="mt-1 text-sm text-blue-100">{dict.subtitle}</p>
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

                        <ScholarshipWizard
                            key={wizardKey}
                            dict={dict}
                            lang={lang}
                            variant="modal"
                            onStateChange={onStateChange}
                            onDone={finish}
                        />

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
