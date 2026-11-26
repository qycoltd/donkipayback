import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  conversionTypeForAnchor,
  loadNaverWcs,
  sendNaverWcsPageView,
  trackNaverConversion,
} from "../lib/naverWcs.ts";

/**
 * Site-wide Naver WCS. Mount once inside the router.
 * Page views fire on the first load and on client-side route changes.
 * One capture listener sends at most one conversion per click and does not
 * change how the link opens.
 */
export default function NaverWcs() {
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    void loadNaverWcs().then(() => {
      if (cancelled) return;
      sendNaverWcsPageView();
    });
    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handledClicks = new WeakSet<Event>();
    const onClick = (event: MouseEvent) => {
      if (handledClicks.has(event)) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const type = conversionTypeForAnchor(anchor);
      if (!type) return;
      handledClicks.add(event);
      trackNaverConversion(type);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
