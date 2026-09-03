// Google Analytics 4 Configuration and Helpers
export const GA_MEASUREMENT_ID = 'G-V97CJ7LH6M';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks a pageview in Google Analytics 4
 */
export function trackPageView(url?: string, title?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_location: url || window.location.href,
      page_path: window.location.pathname + window.location.search,
      page_title: title || document.title,
    });
  }
}

/**
 * Tracks custom events (e.g. form submission, outbound click, conversions)
 */
export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(['event', action, params]);
    }
  }
}
