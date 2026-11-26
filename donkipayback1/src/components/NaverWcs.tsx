import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  isKakaoChannelAddHref,
  loadNaverWcs,
  sendNaverWcsPageView,
  trackKakaoChannelAddConversion,
} from "../lib/naverWcs.ts";

/**
 * Site-wide Naver WCS. Mount once inside the router.
 * Page views fire on the first load and on client-side route changes.
 * Channel-add clicks are matched by URL so the link target and styling stay unchanged.
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
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!isKakaoChannelAddHref(anchor.href)) return;
      trackKakaoChannelAddConversion();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
