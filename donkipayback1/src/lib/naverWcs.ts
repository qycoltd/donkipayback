import {
  isNaverWcsConfigured,
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
let pageViewSent = false;

function bootNaverWcs(): void {
  if (pageViewSent || !isNaverWcsConfigured()) return;
  const wcs = window.wcs;
  if (!wcs || typeof window.wcs_do !== "function" || typeof wcs.inflow !== "function") return;

  window.wcs_add = window.wcs_add || {};
  window.wcs_add["wa"] = NAVER_WCS_WA.trim();
  wcs.inflow(NAVER_WCS_INFLOW_DOMAIN);
  window.wcs_do();
  pageViewSent = true;
}

/**
 * Loads the premium log script and sends the page view.
 * No request is made while the common key is empty.
 */
export function loadNaverWcs(): Promise<void> {
  if (!isNaverWcsConfigured()) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve) => {
    const finish = () => {
      try {
        bootNaverWcs();
      } catch {
        // A tracking failure must not affect the page.
      }
      resolve();
    };

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
      script.dataset.naverWcs = "true";
      document.head.appendChild(script);
    }

    if (script.dataset.loaded === "true") {
      finish();
      return;
    }

    script.addEventListener(
      "load",
      () => {
        script!.dataset.loaded = "true";
        finish();
      },
      { once: true },
    );
    script.addEventListener("error", () => resolve(), { once: true });
  });

  return loadPromise;
}

/**
 * Channel-add click. Sends custom001 only when the common key is set
 * and wcslog.js has loaded. Does nothing when the key is empty.
 */
export function trackKakaoChannelAddConversion(): void {
  if (!isNaverWcsConfigured()) return;
  try {
    const wcs = window.wcs;
    if (!wcs || typeof wcs.trans !== "function") return;
    wcs.trans({ type: NAVER_WCS_CONVERSION_TYPE });
  } catch {
    // Never block the channel-add link.
  }
}
