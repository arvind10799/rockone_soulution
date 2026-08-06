import type { ReactNode } from "react";
import type { IndustryName } from "./industry-names";

/* `name` is typed against the shared list so this grid and the contact form's
   industry dropdown can never drift apart. */
type Industry = { name: IndustryName; icon: ReactNode };

const s = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

const industries: Industry[] = [
  {
    name: "Ecommerce",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="9" cy="20" r="1.2" />
        <circle cx="18" cy="20" r="1.2" />
        <path d="M2 3h2.2l2.3 12.1a1.8 1.8 0 0 0 1.8 1.5h8.5a1.8 1.8 0 0 0 1.8-1.4L21 7H5" />
      </svg>
    )
  },
  {
    name: "Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="6" y="3.5" width="12" height="17" rx="1.2" />
        <path d="M6 20.5h12" />
        <path d="M12 8v5M9.5 10.5h5" />
      </svg>
    )
  },
  {
    name: "Real Estate",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4 21V9l6-4v16" />
        <path d="M10 21V3l8 3.5V21" />
        <path d="M3 21h18" />
        <path d="M13 9h2M13 12.5h2M13 16h2" />
      </svg>
    )
  },
  {
    name: "Media",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="8.2" />
        <circle cx="12" cy="12" r="2.2" />
        <circle cx="12" cy="5.6" r="1" />
        <circle cx="12" cy="18.4" r="1" />
        <circle cx="5.6" cy="12" r="1" />
        <circle cx="18.4" cy="12" r="1" />
      </svg>
    )
  },
  {
    name: "AI Software",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="6" y="6" width="12" height="12" rx="2.2" />
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
        <text x="12" y="14.6" textAnchor="middle" fontSize="6.4" fontWeight={700} fill="currentColor" stroke="none">AI</text>
      </svg>
    )
  },
  {
    name: "Oil & Gas",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="5" y="4" width="8.5" height="16.5" rx="1" />
        <path d="M5 8.5h8.5" />
        <path d="M13.5 8h2l2.5 2.5v6.5a1.6 1.6 0 0 1-3.2 0v-3.5h-1.3" />
      </svg>
    )
  },
  {
    name: "Manufacturing",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M3 21V11l5 3.2V11l5 3.2V8l4 2.2h1.8V21z" />
        <path d="M17 7l.5-3h1.6L20 7" />
        <path d="M3 21h18" />
      </svg>
    )
  },
  {
    name: "Travel & Hospitality",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="8.2" />
        <path d="M3.8 12h16.4" />
        <path d="M12 3.8c2.4 2.2 3.6 5.1 3.6 8.2s-1.2 6-3.6 8.2c-2.4-2.2-3.6-5.1-3.6-8.2S9.6 6 12 3.8Z" />
      </svg>
    )
  },
  {
    name: "Insurance",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M12 3l7 3v5.5c0 4-3 6.6-7 8-4-1.4-7-4-7-8V6z" />
        <path d="M8.8 12l2.2 2.2 4.2-4.4" />
      </svg>
    )
  },
  {
    name: "Security",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M12 3l7 3v5.5c0 4-3 6.6-7 8-4-1.4-7-4-7-8V6z" />
        <rect x="9.3" y="11.2" width="5.4" height="4.4" rx="0.7" />
        <path d="M10.4 11.2v-1a1.6 1.6 0 0 1 3.2 0v1" />
      </svg>
    )
  },
  {
    name: "Finance",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M9.2 3.2h5.6l-1.4 2.6h-2.8z" />
        <path d="M11 5.8c-3 1.2-5.5 4.4-5.5 8.4A6 6 0 0 0 11.5 20h1a6 6 0 0 0 6-5.8c0-4-2.5-7.2-5.5-8.4" />
        <path d="M12 9.5v7M10.4 11.2h2.4a1.3 1.3 0 0 1 0 2.6h-1.6a1.3 1.3 0 0 0 0 2.6h2.4" />
      </svg>
    )
  },
  {
    name: "Education",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M2.5 8.2 12 4l9.5 4.2L12 12.4z" />
        <path d="M6.5 10.3V15c0 1.5 2.7 3 5.5 3s5.5-1.5 5.5-3v-4.7" />
        <path d="M21.5 8.4v5" />
      </svg>
    )
  },
  {
    name: "Logistic",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M2.5 6.5h11v10h-11z" />
        <path d="M13.5 9.5h3.6l3.4 3.4v3.6h-7z" />
        <circle cx="6.5" cy="17.5" r="1.7" />
        <circle cx="17" cy="17.5" r="1.7" />
      </svg>
    )
  },
  {
    name: "Sports",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="8.2" />
        <path d="M3.8 12h16.4M12 3.8v16.4" />
        <path d="M6 6c3 2.4 3 9.6 0 12M18 6c-3 2.4-3 9.6 0 12" />
      </svg>
    )
  },
  {
    name: "Food",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4 10.5a8 8 0 0 1 16 0z" />
        <path d="M3.6 13.5h16.8" />
        <path d="M5.5 16.5h13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2Z" />
      </svg>
    )
  },
  {
    name: "Agritech",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M12 21v-8" />
        <path d="M12 13c0-3.4 2.3-5.6 5.6-5.6C17.6 10.8 15.3 13 12 13Z" />
        <path d="M12 15c0-3-2-5-5-5 0 3 2 5 5 5Z" />
      </svg>
    )
  }
];

export default function IndustrySpecializations() {
  return (
    <section className="industry-section" aria-labelledby="industry-title">
      <div className="industry-head">
        <h2 id="industry-title">Industry Specializations</h2>
        <p>
          Leading start-ups, SMEs and large-scale organizations have trusted us for
          their software development project requirements.
        </p>
      </div>

      <div className="industry-grid">
        {industries.map((industry) => (
          <article className="industry-card" key={industry.name}>
            <span className="industry-icon">{industry.icon}</span>
            <span>{industry.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
