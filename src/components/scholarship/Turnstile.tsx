"use client";

import { useEffect, useRef } from "react";

type TurnstileApi = {
    render: (el: HTMLElement, options: Record<string, unknown>) => string;
    reset: (widgetId?: string) => void;
    remove: (widgetId: string) => void;
};

declare global {
    interface Window {
        turnstile?: TurnstileApi;
    }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let loader: Promise<void> | null = null;

/** Turnstile script'ini sayfa başına yalnızca bir kez yükler. */
function loadTurnstile(): Promise<void> {
    if (window.turnstile) return Promise.resolve();
    if (!loader) {
        loader = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = SCRIPT_SRC;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => {
                loader = null;
                script.remove();
                reject(new Error("Turnstile yüklenemedi"));
            };
            document.head.appendChild(script);
        });
    }
    return loader;
}

type Props = {
    siteKey: string;
    lang: string;
    onToken: (token: string | null) => void;
};

export default function Turnstile({ siteKey, lang, onToken }: Props) {
    const container = useRef<HTMLDivElement>(null);
    const callback = useRef(onToken);

    useEffect(() => {
        callback.current = onToken;
    }, [onToken]);

    useEffect(() => {
        let widgetId: string | undefined;
        let cancelled = false;

        loadTurnstile()
            .then(() => {
                if (cancelled || !container.current || !window.turnstile) return;
                widgetId = window.turnstile.render(container.current, {
                    sitekey: siteKey,
                    language: lang === "eng" ? "en" : "tr",
                    theme: "light",
                    callback: (token: string) => callback.current(token),
                    "expired-callback": () => {
                        callback.current(null);
                        if (widgetId) window.turnstile?.reset(widgetId);
                    },
                    // Hata durumunda token düşürülür; widget kendi otomatik yeniden deneme (retry: auto) mekanizmasıyla sıfırlanır.
                    // Burada elle reset yapmak kalıcı hatalarda (ör. geçersiz site key) sonsuz döngüye yol açar.
                    "error-callback": () => {
                        callback.current(null);
                        return true;
                    },
                });
            })
            .catch(() => callback.current(null));

        return () => {
            cancelled = true;
            callback.current(null);
            if (widgetId) window.turnstile?.remove(widgetId);
        };
    }, [siteKey, lang]);

    return <div ref={container} className="min-h-[65px]" />;
}
