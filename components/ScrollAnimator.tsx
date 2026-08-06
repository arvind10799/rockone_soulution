"use client";

import { useEffect } from "react";

const animatedSelector = [
  ".flow-section",
  ".pillar-card",
  ".platform-card",
  ".review-card",
  ".insight-card",
  ".crm-module-card",
  ".contact-panel",
  ".cs-reveal",
  ".site-footer"
].join(",");

export default function ScrollAnimator() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(animatedSelector));

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-index", `${Math.min(index % 6, 5)}`);
      observer.observe(element);
    });

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
    };
  }, []);

  return null;
}
