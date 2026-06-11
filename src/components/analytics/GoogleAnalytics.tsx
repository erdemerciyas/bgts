"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import {
  hasAnalyticsConsent,
  subscribeToConsentUpdates,
} from "@/lib/cookie-consent"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void
    dataLayer: unknown[]
  }
}

export function GoogleAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    return subscribeToConsentUpdates((stored) => {
      setAnalyticsEnabled(hasAnalyticsConsent(stored?.preferences))
    })
  }, [])

  if (!analyticsEnabled || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

export function pageview(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

export function event(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
