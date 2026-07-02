"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import {
  hasAnalyticsConsent,
  subscribeToConsentUpdates,
} from "@/lib/cookie-consent"
import { pageview } from "@/components/analytics/GoogleAnalytics"

export function GoogleAnalyticsPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    return subscribeToConsentUpdates((stored) => {
      setAnalyticsEnabled(hasAnalyticsConsent(stored?.preferences))
    })
  }, [])

  useEffect(() => {
    if (!analyticsEnabled) return

    const query = searchParams.toString()
    const url = query ? `${pathname}?${query}` : pathname
    pageview(url)
  }, [pathname, searchParams, analyticsEnabled])

  return null
}
