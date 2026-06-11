"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronDown, Cookie, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ACCEPTED_PREFERENCES,
  getStoredConsent,
  isOptionalCategory,
  REJECTED_PREFERENCES,
  saveConsent,
  type CookieCategorySlug,
  type CookiePreferences,
  type StoredConsent,
} from "@/lib/cookie-consent";

type CookieCategoryDict = {
  title: string;
  description: string;
  alwaysActive: string;
  noCookies: string;
};

export type CookieConsentDict = {
  title: string;
  description: string;
  customise: string;
  rejectAll: string;
  acceptAll: string;
  revisitLabel: string;
  preferenceTitle: string;
  preferenceIntro: string[];
  savePreferences: string;
  close: string;
  categories: Record<CookieCategorySlug, CookieCategoryDict>;
};

const CATEGORY_ORDER: CookieCategorySlug[] = [
  "necessary",
  "functional",
  "analytics",
  "performance",
  "advertisement",
];

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
        disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer",
        checked ? "bg-[#1863DC]" : "bg-[#D0D5D2]"
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}

function CategoryAccordion({
  slug,
  category,
  enabled,
  onToggle,
}: {
  slug: CookieCategorySlug;
  category: CookieCategoryDict;
  enabled: boolean;
  onToggle: (value: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const isNecessary = slug === "necessary";

  return (
    <div className="border border-[#EBEBEB] rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="mt-1 text-[#212121] hover:text-[#1863DC] transition-colors"
          >
            <ChevronDown
              className={cn("w-4 h-4 transition-transform", open && "rotate-180")}
            />
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="font-semibold text-[#212121] text-left hover:text-[#1863DC] transition-colors"
              >
                {category.title}
              </button>

              {isNecessary ? (
                <span className="text-xs font-semibold text-[#1863DC] uppercase tracking-wide">
                  {category.alwaysActive}
                </span>
              ) : (
                <Toggle
                  checked={enabled}
                  onChange={onToggle}
                  label={category.title}
                />
              )}
            </div>

            <p className="mt-2 text-sm text-[#212121]/80 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {open && (
        <div className="px-4 pb-4">
          <div className="rounded-md border border-[#EBEBEB] bg-[#F4F4F4] px-4 py-3 text-sm text-[#212121]/70">
            {category.noCookies}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CookieConsent({ dict }: { dict: CookieConsentDict }) {
  const [mounted, setMounted] = useState(false);
  const [storedConsent, setStoredConsent] = useState<StoredConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [draftPreferences, setDraftPreferences] =
    useState<CookiePreferences>(REJECTED_PREFERENCES);

  useEffect(() => {
    const existing = getStoredConsent();
    setStoredConsent(existing);
    setShowBanner(!existing);
    setDraftPreferences(existing?.preferences ?? REJECTED_PREFERENCES);
    setMounted(true);
  }, []);

  const persistConsent = useCallback((preferences: CookiePreferences) => {
    const saved = saveConsent(preferences);
    setStoredConsent(saved);
    setDraftPreferences(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const handleAcceptAll = useCallback(() => {
    persistConsent(ACCEPTED_PREFERENCES);
  }, [persistConsent]);

  const handleRejectAll = useCallback(() => {
    persistConsent(REJECTED_PREFERENCES);
  }, [persistConsent]);

  const handleSavePreferences = useCallback(() => {
    persistConsent(draftPreferences);
  }, [draftPreferences, persistConsent]);

  const handleOpenPreferences = useCallback(() => {
    setDraftPreferences(storedConsent?.preferences ?? REJECTED_PREFERENCES);
    setShowPreferences(true);
  }, [storedConsent]);

  const showRevisit = mounted && !!storedConsent && !showBanner;

  const preferenceIntro = useMemo(
    () => dict.preferenceIntro.filter(Boolean),
    [dict.preferenceIntro]
  );

  if (!mounted) return null;

  return (
    <>
      {showBanner && (
        <div
          className="fixed bottom-4 left-4 z-[99999] w-[min(calc(100vw-2rem),540px)]"
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
        >
          <div className="rounded-lg border border-[#F4F4F4] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <h2
              id="cookie-consent-title"
              className="text-lg font-bold text-[#212121] mb-3"
            >
              {dict.title}
            </h2>
            <p className="text-sm text-[#212121]/85 leading-relaxed mb-5">
              {dict.description}
            </p>
            <div className="flex flex-nowrap items-stretch gap-2">
              <button
                type="button"
                onClick={handleOpenPreferences}
                className="flex-1 inline-flex items-center justify-center rounded-md border border-[#1863DC] px-3 py-2 text-sm font-semibold text-[#1863DC] transition-colors hover:bg-[#1863DC]/5 whitespace-nowrap"
              >
                {dict.customise}
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="flex-1 inline-flex items-center justify-center rounded-md border border-[#1863DC] px-3 py-2 text-sm font-semibold text-[#1863DC] transition-colors hover:bg-[#1863DC]/5 whitespace-nowrap"
              >
                {dict.rejectAll}
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 inline-flex items-center justify-center rounded-md border border-[#1863DC] bg-[#1863DC] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1454BD] whitespace-nowrap"
              >
                {dict.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="fixed inset-0 z-[100000] flex items-end sm:items-center justify-center p-4">
          <button
            type="button"
            aria-label={dict.close}
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowPreferences(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preference-title"
            className="relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-[#F4F4F4] bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#F4F4F4] px-5 py-4">
              <h2
                id="cookie-preference-title"
                className="text-lg font-bold text-[#212121]"
              >
                {dict.preferenceTitle}
              </h2>
              <button
                type="button"
                aria-label={dict.close}
                onClick={() => setShowPreferences(false)}
                className="rounded-md p-1 text-[#212121]/70 hover:bg-[#F4F4F4] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-4 space-y-4">
              <div className="space-y-3 text-sm text-[#212121]/85 leading-relaxed">
                {preferenceIntro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="space-y-3">
                {CATEGORY_ORDER.map((slug) => (
                  <CategoryAccordion
                    key={slug}
                    slug={slug}
                    category={dict.categories[slug]}
                    enabled={
                      slug === "necessary"
                        ? true
                        : draftPreferences[slug]
                    }
                    onToggle={(value) => {
                      if (!isOptionalCategory(slug)) return;
                      setDraftPreferences((current) => ({
                        ...current,
                        [slug]: value,
                      }));
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-[#F4F4F4] px-5 py-4 flex justify-end">
              <button
                type="button"
                onClick={handleSavePreferences}
                className="inline-flex items-center justify-center rounded-md border border-[#1863DC] bg-[#1863DC] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1454BD]"
              >
                {dict.savePreferences}
              </button>
            </div>
          </div>
        </div>
      )}

      {showRevisit && !showPreferences && (
        <button
          type="button"
          aria-label={dict.revisitLabel}
          title={dict.revisitLabel}
          onClick={handleOpenPreferences}
          className="fixed bottom-4 left-4 z-[99998] flex h-11 w-11 items-center justify-center rounded-full bg-[#0056A7] text-white shadow-lg transition-transform hover:scale-105"
        >
          <Cookie className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
