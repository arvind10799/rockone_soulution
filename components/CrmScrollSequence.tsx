"use client";

import { useEffect, useRef, useState } from "react";
import { crmScreens } from "./CrmMockScreens";

/**
 * The case study's centrepiece: a device stage that pins while six chapters of
 * copy scroll past it, crossfading between the recreated CRM screens.
 *
 * Pinning is pure CSS (`position: sticky`) so the page never hijacks scroll.
 * This component only tracks which chapter is in view; every screen stays
 * mounted and is faded with opacity, so there is no `display: none` hard cut.
 *
 * Each screen is a full app recreation, so it is rendered exactly once — the
 * stage stays sticky at every breakpoint and the stylesheet just moves it from
 * beside the chapters to above them on narrow screens.
 */

export default function CrmScrollSequence() {
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = chapterRefs.current.filter(Boolean) as HTMLElement[];
    if (nodes.length === 0) return;

    // Driven by scroll rather than IntersectionObserver: "which chapter is
    // nearest the middle" is a continuous measurement, and an observer only
    // reports entries whose intersection *changed*, so it silently misses
    // updates during fast scrolling.
    //
    // Measuring directly in the handler (rather than deferring to rAF) keeps
    // the screen in lockstep with the copy. Scroll already fires at most once
    // per frame, and six getBoundingClientRect reads during a clean layout is
    // negligible.
    const measure = () => {
      const middle = window.innerHeight / 2;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      nodes.forEach((node, index) => {
        const box = node.getBoundingClientRect();
        const distance = Math.abs(box.top + box.height / 2 - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setActive(bestIndex);
    };

    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const current = crmScreens[active];

  return (
    <div className="cs-seq">
      <div className="cs-seq-stage-col">
        <div className="cs-seq-stage">
          <div className="cs-seq-frames">
            {crmScreens.map((screen, index) => (
              <figure
                className={`crm-frame cs-frame cs-seq-frame${
                  active === index ? " is-active" : ""
                }`}
                key={screen.id}
                aria-hidden={active !== index}
              >
                <div className="crm-frame-chrome" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>{screen.url}</span>
                </div>
                {screen.node}
              </figure>
            ))}
          </div>

          <div className="cs-seq-legend">
            <p className="cs-seq-stage-label">
              <span>{String(active + 1).padStart(2, "0")}</span>
              {current.module}
            </p>
            <div className="cs-seq-ticks" aria-hidden="true">
              {crmScreens.map((screen, index) => (
                <span
                  className={active === index ? "is-active" : ""}
                  key={screen.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ol className="cs-seq-chapters">
        {crmScreens.map((screen, index) => (
          <li
            className={`cs-seq-chapter${active === index ? " is-active" : ""}`}
            key={screen.id}
            ref={(node) => {
              chapterRefs.current[index] = node;
            }}
          >
            <span className="cs-seq-num">{String(index + 1).padStart(2, "0")}</span>
            <span className="cs-seq-module">{screen.module}</span>
            <h3>{screen.title}</h3>
            <p>{screen.blurb}</p>
            <p className="cs-seq-protects">{screen.protects}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
