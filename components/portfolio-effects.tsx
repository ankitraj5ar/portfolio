"use client";

import { useEffect } from "react";

/**
 * Runs the original portfolio's load-stagger and scroll-reveal animations.
 * Mount once at the page root.
 */
export function PortfolioEffects() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".load-hidden");
    const timers: ReturnType<typeof setTimeout>[] = [];
    els.forEach((el, i) => {
      const t = setTimeout(
        () => {
          el.classList.add("load-visible");
        },
        120 + i * 110,
      );
      timers.push(t);
    });
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );
    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
