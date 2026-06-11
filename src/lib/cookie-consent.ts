export const COOKIE_CONSENT_KEY = "bgts_cookie_consent";
export const COOKIE_CONSENT_EXPIRY_DAYS = 365;
export const COOKIE_CONSENT_EVENT = "bgts-cookie-consent-updated";

export type CookieCategorySlug =
  | "necessary"
  | "functional"
  | "analytics"
  | "performance"
  | "advertisement";

export type OptionalCookieCategory = Exclude<CookieCategorySlug, "necessary">;

export interface CookiePreferences {
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
}

export interface StoredConsent {
  preferences: CookiePreferences;
  timestamp: number;
}

export const REJECTED_PREFERENCES: CookiePreferences = {
  functional: false,
  analytics: false,
  performance: false,
  advertisement: false,
};

export const ACCEPTED_PREFERENCES: CookiePreferences = {
  functional: true,
  analytics: true,
  performance: true,
  advertisement: true,
};

export function isOptionalCategory(
  slug: CookieCategorySlug
): slug is OptionalCookieCategory {
  return slug !== "necessary";
}

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;
    const expiryMs = COOKIE_CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    if (!parsed.timestamp || Date.now() - parsed.timestamp > expiryMs) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(preferences: CookiePreferences): StoredConsent {
  const stored: StoredConsent = {
    preferences,
    timestamp: Date.now(),
  };

  if (typeof window !== "undefined") {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(stored));
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: stored })
    );
  }

  return stored;
}

export function hasAnalyticsConsent(preferences?: CookiePreferences | null): boolean {
  return preferences?.analytics ?? false;
}

export function subscribeToConsentUpdates(
  callback: (consent: StoredConsent | null) => void
): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  callback(getStoredConsent());

  const handleUpdate = (event: Event) => {
    const customEvent = event as CustomEvent<StoredConsent>;
    callback(customEvent.detail ?? getStoredConsent());
  };

  window.addEventListener(COOKIE_CONSENT_EVENT, handleUpdate);
  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handleUpdate);
}
