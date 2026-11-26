import {
  isNaverWcsConfigured,
  KAKAO_CHANNEL_ADD_URL,
  NAVER_WCS_CONVERSION_TYPE,
  NAVER_WCS_INFLOW_DOMAIN,
  NAVER_WCS_WA,
} from "../config/naverWcs.ts";

const WCS_SCRIPT_SRC = "https://wcs.naver.net/wcslog.js";

declare global {
  interface Window {
    wcs_add?: Record<string, string>;
    wcs_do?: () => void;
    wcs?: {
      inflow: (domain: string) => void;
      trans: (conversion: { type: string }) => void;
    };
  }
}

let loadPromise: Promise<void> | null = null;
let pendingConversions = 0;

/**
 * True when the link is the Kakao channel-add URL.
 * Query strings and a trailing slash do not change the match.
 * Chat links (…/_VITdX/chat) are not channel adds.
 */
export function isKakaoChannelAddHref(href: string): boolean {
  try {
    const url = new URL(href, "https://donkipayback.com");
    const expected = new URL(KAKAO_CHANNEL_ADD_URL);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const expectedPath = expected.pathname.replace(/\/+$/, "") || "/";
    return url.hostname === expected.hostname && path === expectedPath;
  } catch {
    return false;
  }
}

function identifySite(): boolean {
  if (!isNaverWcsConfigured() || !window.wcs) return false;
  window.wcs_add = window.wcs_add || {};
  window.wcs_add["wa"] = NAVER_WCS_WA.trim();
  if (typeof window.wcs.inflow === "function") {
    window.wcs.inflow(NAVER_WCS_INFLOW_DOMAIN);
  }
  return true;
}

/**
 * Loads wcslog.js once. Does not send a page view; call
 * sendNaverWcsPageView after this resolves (including on each SPA route).
 * No request is made while the common key is empty.
 */
export function loadNaverWcs(): Promise<void> {
  if (!isNaverWcsConfigured()) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve) => {
    const finish = () => resolve();

    if (window.wcs && typeof window.wcs_do === "function") {
      finish();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${WCS_SCRIPT_SRC}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = WCS_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    if (script.dataset.loaded === "true") {
      finish();
      return;
    }

    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        finish();
      },
      { once: true },
    );
    script.addEventListener("error", () => resolve(), { once: true });
  });

  return loadPromise;
}

/** Page view: wcs_add["wa"], wcs.inflow, wcs_do. No-op if the script is blocked. */
export function sendNaverWcsPageView(): void {
  try {
    if (!identifySite() || typeof window.wcs_do !== "function") return;
    window.wcs_do();
  } catch {
    // A tracking failure must not affect the page.
  }
}

function sendConversionNow(): boolean {
  if (!identifySite()) return false;
  const wcs = window.wcs;
  if (!wcs || typeof wcs.trans !== "function") return false;
  wcs.trans({ type: NAVER_WCS_CONVERSION_TYPE });
  return true;
}

function flushPendingConversions(): void {
  while (pendingConversions > 0) {
    if (!sendConversionNow()) return;
    pendingConversions -= 1;
  }
}

/**
 * Channel-add click. Sends wcs.trans({ type: "custom001" }) only.
 * The legacy cnv call is intentionally omitted: Naver counts both,
 * and one trans event permanently filters the matching cnv type.
 * If wcslog.js is still loading, the conversion is sent when it finishes.
 * Never throws and never blocks navigation.
 */
export function trackKakaoChannelAddConversion(): void {
  if (!isNaverWcsConfigured()) return;
  try {
    if (sendConversionNow()) return;
    pendingConversions += 1;
    void loadNaverWcs().then(() => {
      try {
        flushPendingConversions();
      } catch {
        // Never block the channel-add link.
      }
    });
  } catch {
    // Never block the channel-add link.
  }
}
