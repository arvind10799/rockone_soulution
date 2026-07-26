"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Stage = {
  name: string;
  description: string;
  icon: ReactNode;
};

const stages: Stage[] = [
  {
    name: "Scoping",
    description:
      "We map goals, requirements, and success metrics so every project starts with a clear, shared direction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    )
  },
  {
    name: "Cost Estimation",
    description:
      "Transparent scoping and estimates keep budgets predictable and priorities aligned before we build.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 3h6v3H9zM9 11h6M9 15h4" />
      </svg>
    )
  },
  {
    name: "Development",
    description:
      "Our agile development process ensures timely delivery, module by module, with dependency analysis at each step.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
      </svg>
    )
  },
  {
    name: "QA & Testing",
    description:
      "Structured testing across devices and edge cases so releases ship stable, accessible, and on-brand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
        <path d="m10 10 1.5 1.5L10 13" />
      </svg>
    )
  },
  {
    name: "Deployment",
    description:
      "Controlled launches with monitoring in place, so going live is smooth and fully accountable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3c3.5 2 5 5.5 5 9l-5 3-5-3c0-3.5 1.5-7 5-9Z" />
        <circle cx="12" cy="10" r="1.6" />
        <path d="M9 17l-2 4M15 17l2 4" />
      </svg>
    )
  },
  {
    name: "Maintenance",
    description:
      "Ongoing support, updates, and improvements keep the product healthy and ready to scale over time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-.4-.4-2.3z" />
      </svg>
    )
  }
];

const flowOrder = [0, 1, 2, 3, 4, 5];

export default function AgileProcessSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const active = stages[activeIndex];

  return (
    <section className="agile-section flow-section flow-left" aria-labelledby="agile-title">
      <div className="agile-copy">
        <span className="section-kicker agile-kicker">How we work</span>
        <h2 id="agile-title" className="agile-heading">
          Our Agile Process.
          <span>Simple, Seamless, Streamlined</span>
        </h2>
        <p>
          We follow a structured and agile development approach with a project
          management planner to ensure the successful delivery of every project,
          focusing on quality, cost-optimization, transparency, and client
          satisfaction.
        </p>

        <div className="agile-flow" role="list" aria-label="Delivery process steps">
          {flowOrder.map((stageIndex, position) => (
            <div className="agile-flow-item" role="listitem" key={stages[stageIndex].name}>
              <button
                type="button"
                className={`agile-node${activeIndex === stageIndex ? " is-active" : ""}`}
                onClick={() => setActiveIndex(stageIndex)}
                aria-pressed={activeIndex === stageIndex}
              >
                {stages[stageIndex].name}
              </button>
              {position < flowOrder.length - 1 && (
                <span
                  className={`agile-flow-arrow${position === 2 ? " is-turn" : ""}`}
                  aria-hidden="true"
                >
                  {position === 2 ? "↓" : "→"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="agile-orbit" aria-hidden="true">
        <div className="agile-orbit-ring" />
        <div className="agile-orbit-ring agile-orbit-ring-inner" />

        {stages.map((stage, index) => {
          const angle = (360 / stages.length) * index - 90;
          return (
            <button
              type="button"
              key={stage.name}
              className={`agile-orbit-node${activeIndex === index ? " is-active" : ""}`}
              style={{ ["--angle" as string]: `${angle}deg` }}
              onClick={() => setActiveIndex(index)}
              aria-label={stage.name}
            >
              {stage.icon}
            </button>
          );
        })}

        <div className="agile-orbit-center" key={active.name}>
          <span className="agile-orbit-step">
            Step {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <strong>{active.name}</strong>
          <p>{active.description}</p>
        </div>
      </div>
    </section>
  );
}
