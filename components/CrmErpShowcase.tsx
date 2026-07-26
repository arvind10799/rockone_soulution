"use client";

import { useEffect, useState } from "react";

const ROTATE_MS = 6000;

const systems = [
  {
    tag: "CRM",
    label: "Sales & Clients",
    title: "Every lead tracked from first inquiry to close.",
    body:
      "Pipelines, owners, and follow-ups in one place — so no inquiry is forgotten and every client conversation has context.",
    points: [
      "Website & campaign leads captured automatically",
      "Owner assignment with follow-up reminders",
      "Full client history, notes, and call status"
    ],
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1600&q=80",
    alt: "Sales executive on a client call working from a CRM screen",
    stat: { value: "184", label: "active leads in pipeline" }
  },
  {
    tag: "ERP",
    label: "Operations",
    title: "Orders, approvals, and inventory in one flow.",
    body:
      "From purchase order to dispatch — every document, approval, and delivery status visible across departments.",
    points: [
      "Approvals with clear ownership and deadlines",
      "Billing, dispatch, and delivery tracking",
      "Inventory and vendor records in sync"
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    alt: "Warehouse operator updating stock and dispatch status",
    stat: { value: "42 / 50", label: "approvals cleared today" }
  },
  {
    tag: "BI",
    label: "Reports",
    title: "Decisions backed by live numbers, not guesswork.",
    body:
      "Leadership dashboards that pull sales, operations, and finance into one clear, always-current picture.",
    points: [
      "Revenue, pipeline, and collection reports",
      "Team activity and SLA tracking",
      "Bottlenecks flagged before they hurt"
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    alt: "Live business analytics dashboard with revenue charts",
    stat: { value: "₹18.4L", label: "revenue tracked this month" }
  }
];

const tick = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4 4 10-10" />
  </svg>
);

export default function CrmErpShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % systems.length);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const current = systems[active];

  return (
    <div
      className="crm-show"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="crm-show-tabs" role="tablist" aria-label="Business system capabilities">
        {systems.map((system, index) => (
          <button
            type="button"
            key={system.tag}
            role="tab"
            aria-selected={active === index}
            className={`crm-show-tab${active === index ? " is-active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span className="crm-show-tab-tag">{system.tag}</span>
            {system.label}
          </button>
        ))}
        <span
          className={`crm-show-progress${paused ? " is-paused" : ""}`}
          key={active}
          style={{ ["--rotate-ms" as string]: `${ROTATE_MS}ms` }}
          aria-hidden="true"
        />
      </div>

      <div className="crm-show-stage">
        {systems.map((system, index) => (
          <figure
            className={`crm-show-media${active === index ? " is-active" : ""}`}
            key={system.tag}
            aria-hidden={active !== index}
          >
            <img src={system.image} alt={system.alt} loading={index === 0 ? "eager" : "lazy"} />
            <figcaption className="crm-show-stat">
              <strong>{system.stat.value}</strong>
              <span>{system.stat.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="crm-show-content" key={current.tag}>
        <h3>{current.title}</h3>
        <p>{current.body}</p>
        <ul>
          {current.points.map((point) => (
            <li key={point}>
              <span className="crm-show-tick">{tick}</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
