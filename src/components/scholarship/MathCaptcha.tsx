"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Loader2, RefreshCw, ShieldQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

export type CaptchaValue = { token: string; answer: string } | null;

type Props = {
    labels: { question: string; placeholder: string; refresh: string; loadError: string };
    onChange: (value: CaptchaValue) => void;
};

/** Sunucudan imzalı rastgele matematik sorusu alır; cevap yalnızca sunucuda doğrulanır. */
export default function MathCaptcha({ labels, onChange }: Props) {
    const id = useId();
    const [challenge, setChallenge] = useState<{ question: string; token: string } | null>(null);
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
    const callback = useRef(onChange);

    useEffect(() => {
        callback.current = onChange;
    }, [onChange]);

    const load = useCallback(async () => {
        setStatus("loading");
        setAnswer("");
        callback.current(null);
        try {
            const res = await fetch("/api/scholarship/challenge", { cache: "no-store" });
            if (!res.ok) throw new Error(String(res.status));
            setChallenge((await res.json()) as { question: string; token: string });
            setStatus("ready");
        } catch {
            setStatus("error");
        }
    }, []);

    useEffect(() => {
        // Soru yalnızca bileşen açıldığında bir kez alınır; yenileme butonla yapılır.
        void load();
        return () => callback.current(null);
    }, [load]);

    const change = (raw: string) => {
        const value = raw.replace(/[^\d-]/g, "").slice(0, 4);
        setAnswer(value);
        callback.current(challenge && value ? { token: challenge.token, answer: value } : null);
    };

    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5">
            <label htmlFor={id} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <ShieldQuestion className="h-4 w-4 text-[#0056A7]" />
                {labels.question}
            </label>
            <div className="mt-3 flex flex-wrap items-center gap-3">
                <div
                    aria-live="polite"
                    className="flex h-12 min-w-[8.5rem] select-none items-center justify-center rounded-xl border border-blue-100 bg-white px-4 font-mono text-lg font-bold tracking-wider text-slate-900 shadow-sm"
                >
                    {status === "loading" && <Loader2 className="h-5 w-5 animate-spin text-slate-400" />}
                    {status === "ready" && challenge && <span>{challenge.question} = ?</span>}
                    {status === "error" && <span className="text-sm font-medium text-red-600">{labels.loadError}</span>}
                </div>
                <input
                    id={id}
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder={labels.placeholder}
                    value={answer}
                    disabled={status !== "ready"}
                    onChange={(e) => change(e.target.value)}
                    className={cn(
                        "h-12 w-28 rounded-xl border border-slate-200 bg-white px-4 text-center text-base font-semibold text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
                    )}
                />
                <button
                    type="button"
                    onClick={() => void load()}
                    className="inline-flex h-12 items-center gap-1.5 rounded-xl px-3 text-xs font-semibold text-[#0056A7] hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                >
                    <RefreshCw className={cn("h-3.5 w-3.5", status === "loading" && "animate-spin")} />
                    {labels.refresh}
                </button>
            </div>
        </div>
    );
}
