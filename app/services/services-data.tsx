import type { ReactNode } from "react";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  outcomes: string[];
  /** Optional per-service FAQ. Falls back to serviceDetailFaqs when absent. */
  faqs?: Faq[];
};

export type ServiceCategory = {
  slug: string;
  name: string;
  blurb: string;
  accent: string;
  icon: ReactNode;
  services: Service[];
};

const ic = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "websites-experience",
    name: "Websites & Experience",
    blurb:
      "Premium, conversion-led websites and interfaces that make your business feel credible in seconds.",
    accent: "#1c5fb8",
    icon: (
      <svg viewBox="0 0 24 24" {...ic}>
        <rect x="3" y="4.5" width="18" height="15" rx="2" />
        <path d="M3 9h18M7 6.6h.01M9.5 6.6h.01" />
      </svg>
    ),
    services: [
      {
        slug: "custom-website-development",
        title: "Custom Website Development",
        tagline: "Premium, conversion-led websites built to earn trust fast.",
        summary:
          "We design and develop fast, responsive websites with a clear page structure that turns visitors into qualified inquiries — crafted around your brand, never forced into a template.",
        deliverables: [
          "Bespoke UI design and front-end build",
          "Conversion-focused page structure and copy guidance",
          "Fully responsive across every device",
          "A CMS your team can edit without a developer"
        ],
        outcomes: [
          "A sharper, more credible first impression",
          "More qualified inquiries from the same traffic",
          "A website your team can actually maintain"
        ]
      },
      {
        slug: "ux-ui-design",
        title: "UX / UI Web Design",
        tagline: "Interfaces that feel intuitive and look unmistakably yours.",
        summary:
          "Our designers combine trusted UX methods with modern visual craft to create engaging experiences and seamless user journeys that guide people toward action.",
        deliverables: [
          "User flows and wireframes",
          "High-fidelity UI and a reusable design system",
          "Interactive prototypes for key journeys",
          "Accessibility and usability review"
        ],
        outcomes: [
          "Lower friction and higher engagement",
          "A consistent, scalable design system",
          "Journeys designed to convert"
        ]
      },
      {
        slug: "website-redesign",
        title: "Website Redesign",
        tagline: "Turn a dated site into a modern growth asset.",
        summary:
          "Whether you need a refresh or a complete overhaul, we analyze your site's pain points and opportunities, then rebuild for performance, clarity, and conversion.",
        deliverables: [
          "UX, content, and performance audit",
          "Modern visual redesign",
          "Restructured content and navigation",
          "SEO-safe migration"
        ],
        outcomes: [
          "A modern presence that builds trust",
          "Faster load times and better Core Web Vitals",
          "Rankings preserved through a clean migration"
        ]
      },
      {
        slug: "ecommerce-development",
        title: "eCommerce Development",
        tagline: "Storefronts built for clean discovery and confident checkout.",
        summary:
          "Shopify and CMS-based storefronts designed for effortless product discovery, a smooth checkout, and an operational handoff your team can actually manage.",
        deliverables: [
          "Store design and build",
          "Product and catalog setup",
          "Checkout and payment integration",
          "Inventory and order workflows"
        ],
        outcomes: [
          "A buying journey that reduces drop-off",
          "Stronger online sales",
          "Operations that scale with orders"
        ]
      }
    ]
  },
  {
    slug: "software-systems",
    name: "Software & Systems",
    blurb:
      "Custom software, CRM, ERP, and automation that replace scattered tools with one clean operating layer.",
    accent: "#4f46e5",
    icon: (
      <svg viewBox="0 0 24 24" {...ic}>
        <rect x="3.5" y="4" width="17" height="6" rx="1.6" />
        <rect x="3.5" y="14" width="17" height="6" rx="1.6" />
        <path d="M7 7h.01M7 17h.01" />
      </svg>
    ),
    services: [
      {
        slug: "custom-software-development",
        title: "Custom Software Development",
        tagline: "Purpose-built tools that replace scattered spreadsheets.",
        summary:
          "We build software around how your business actually works — internal tools for operations, reporting, and workflows that off-the-shelf products can't quite fit.",
        deliverables: [
          "Discovery and solution design",
          "Custom web application build",
          "Role-based access and reporting",
          "Integrations with your existing tools"
        ],
        outcomes: [
          "Fewer manual, error-prone processes",
          "One source of truth for your team",
          "Software that grows with your operation"
        ]
      },
      {
        slug: "crm-systems",
        title: "CRM Systems",
        tagline: "Every lead captured, owned, and followed up.",
        summary:
          "Lead tracking, client records, follow-up visibility, and clear team ownership — so no inquiry slips through the cracks from first touch to close.",
        deliverables: [
          "Lead capture and pipeline setup",
          "Contact and account records",
          "Task, reminder, and follow-up flows",
          "Dashboards and reporting"
        ],
        outcomes: [
          "Faster response and follow-up",
          "Full visibility of the sales pipeline",
          "Fewer lost or forgotten leads"
        ]
      },
      {
        slug: "erp-systems",
        title: "ERP Systems",
        tagline: "Operations, approvals, and reporting in one flow.",
        summary:
          "Connect tasks, departments, approvals, documents, billing, and delivery status into one operating layer that keeps everyone aligned and accountable.",
        deliverables: [
          "Process and module mapping",
          "Approvals and document flows",
          "Billing and delivery tracking",
          "Executive reporting views"
        ],
        outcomes: [
          "Less coordination overhead",
          "Clear status across departments",
          "Sharper operational visibility"
        ]
      },
      {
        slug: "workflow-automation",
        title: "Workflow Automation",
        tagline: "Connect the steps and remove the busywork.",
        summary:
          "Forms, handoffs, notifications, and reporting connected end to end — so your team spends time on work that matters instead of chasing updates.",
        deliverables: [
          "Workflow and trigger mapping",
          "Automated handoffs and alerts",
          "Third-party integrations",
          "Monitoring and reporting"
        ],
        outcomes: [
          "Fewer missed steps and delays",
          "More capacity without more headcount",
          "Reliable, repeatable processes"
        ]
      }
    ]
  },
  {
    slug: "growth-marketing",
    name: "Growth & Marketing",
    blurb:
      "SEO, paid media, and automation connected to measurable actions — not vanity reports.",
    accent: "#f35a2b",
    icon: (
      <svg viewBox="0 0 24 24" {...ic}>
        <path d="M4 19V5M4 19h16" />
        <path d="M7 15l3.5-3.5 3 3L20 8" />
        <path d="M20 8h-3.5M20 8v3.5" />
      </svg>
    ),
    services: [
      {
        slug: "seo",
        title: "Search Engine Optimization",
        tagline: "Attract organic, high-intent search traffic.",
        summary:
          "A comprehensive set of on-page, technical, and content work designed to boost your rankings and bring in qualified, non-paid Google traffic that converts.",
        deliverables: [
          "Technical SEO audit and fixes",
          "Keyword and content strategy",
          "On-page and structure optimization",
          "Local and Google Business setup"
        ],
        outcomes: [
          "Higher rankings for terms that matter",
          "More qualified organic traffic",
          "Compounding, long-term visibility"
        ]
      },
      {
        slug: "paid-media",
        title: "Paid Media",
        tagline: "Targeted campaigns built to convert, not just impress.",
        summary:
          "Reach your ideal customers with highly targeted social and search campaigns. We craft the creative, optimize spend, and continuously A/B test for maximum ROI.",
        deliverables: [
          "Campaign strategy and setup",
          "Creative and ad copy",
          "Conversion tracking and A/B tests",
          "Budget and bid optimization"
        ],
        outcomes: [
          "Lower cost per qualified lead",
          "Ad spend tied to real ROI",
          "Faster, measurable pipeline"
        ]
      },
      {
        slug: "landing-pages",
        title: "Landing Pages",
        tagline: "Campaign pages engineered for a single action.",
        summary:
          "Campaign-specific pages built for paid media, SEO, and lead capture — focused, fast, and designed to move a visitor toward one clear next step.",
        deliverables: [
          "Conversion-focused page design",
          "Offer and copy structure",
          "Form and CRM integration",
          "A/B test variants"
        ],
        outcomes: [
          "Higher campaign conversion rates",
          "Clean lead capture into your CRM",
          "Pages you can launch fast"
        ]
      },
      {
        slug: "marketing-automation",
        title: "Marketing Automation",
        tagline: "Turn campaigns into measurable, connected handoffs.",
        summary:
          "Campaign leads pushed straight into CRM, follow-up sequences, and reporting workflows — so marketing and sales finally speak the same language.",
        deliverables: [
          "Lead routing and scoring",
          "Email and follow-up sequences",
          "CRM and analytics integration",
          "Attribution reporting"
        ],
        outcomes: [
          "No lead left without follow-up",
          "A clear view of what's working",
          "Marketing tied to revenue"
        ]
      },
      {
        slug: "performance-marketing",
        title: "Performance Marketing",
        tagline: "Spend measured against pipeline, not impressions.",
        summary:
          "Full-funnel campaign management where every channel, creative, and keyword is judged on the revenue it produces — with the tracking in place to prove it.",
        deliverables: [
          "Channel strategy and media planning",
          "Conversion tracking and attribution setup",
          "Creative testing and landing page iteration",
          "Weekly performance reporting"
        ],
        outcomes: [
          "Budget shifted to what actually converts",
          "Cost per acquisition you can defend",
          "Campaign spend tied to closed revenue"
        ]
      }
    ]
  },
  {
    slug: "ai-support-care",
    name: "AI, Support & Care",
    blurb:
      "Practical AI guidance plus the maintenance, speed, and security that keep everything running.",
    accent: "#10a8df",
    icon: (
      <svg viewBox="0 0 24 24" {...ic}>
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
        <path d="M18 15l.7 1.9L20.6 18l-1.9.7L18 20.6l-.7-1.9L15.4 18l1.9-.7z" />
      </svg>
    ),
    services: [
      {
        slug: "ai-consultation",
        title: "AI Consultation",
        tagline: "A clear, practical plan to adopt AI where it helps.",
        summary:
          "We analyze your business goals and map a clear, step-by-step AI adoption plan — focused on real, useful outcomes rather than hype.",
        deliverables: [
          "Opportunity and readiness assessment",
          "Prioritized AI use-case roadmap",
          "Tooling and integration guidance",
          "Rollout and enablement plan"
        ],
        outcomes: [
          "Clarity on where AI actually helps",
          "A pragmatic, low-risk roadmap",
          "Faster, smarter internal workflows"
        ]
      },
      {
        slug: "maintenance-support",
        title: "Maintenance & Support",
        tagline: "Steady care that keeps your site healthy.",
        summary:
          "Updates, fixes, content changes, and dependable care for your live website — so small issues never grow into big ones.",
        deliverables: [
          "Ongoing updates and fixes",
          "Content and change requests",
          "Backups and monitoring",
          "Priority support response"
        ],
        outcomes: [
          "A site that stays secure and current",
          "Quick turnaround on changes",
          "Peace of mind after launch"
        ]
      },
      {
        slug: "speed-optimization",
        title: "Speed Optimization",
        tagline: "Faster pages, better rankings, happier users.",
        summary:
          "Performance reviews, front-end cleanup, and Core Web Vitals improvements that make your site feel instant and rank better.",
        deliverables: [
          "Performance and Core Web Vitals audit",
          "Asset and image optimization",
          "Code and front-end cleanup",
          "Caching and delivery tuning"
        ],
        outcomes: [
          "Noticeably faster load times",
          "Better search performance",
          "Lower bounce, higher engagement"
        ]
      },
      {
        slug: "security-hosting",
        title: "Security & Hosting",
        tagline: "Reliable hosting and practical protection.",
        summary:
          "Deployment, hosting guidance, backups, and practical hardening — form protection, access review, and monitoring to keep your systems reliable.",
        deliverables: [
          "Hosting and deployment setup",
          "Backups and recovery",
          "Security hardening and access review",
          "Uptime and threat monitoring"
        ],
        outcomes: [
          "Dependable uptime and recovery",
          "Reduced security risk",
          "One less thing to worry about"
        ]
      }
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We learn your goals, users, and constraints, then define what success looks like."
  },
  {
    step: "02",
    title: "Design",
    body: "We shape the experience and architecture, aligning on scope and direction early."
  },
  {
    step: "03",
    title: "Build",
    body: "We develop in clear milestones, with quality checks and steady communication."
  },
  {
    step: "04",
    title: "Launch",
    body: "We ship carefully — testing, monitoring, and a smooth handoff to your team."
  },
  {
    step: "05",
    title: "Optimize",
    body: "We measure, refine, and support, so results compound long after go-live."
  }
];

/* Shown on every service detail page: what a prospect does next, and how
   quickly they hear back. Kept generic so it stays true for all services. */
export const nextSteps = [
  {
    step: "01",
    title: "Send us the brief",
    body: "Share your goal, timeline, and budget range. A two-line message is enough to start — no formal spec required."
  },
  {
    step: "02",
    title: "Get a scoped proposal",
    body: "Within two working days you get a written scope, milestone plan, and fixed price for the work as described."
  },
  {
    step: "03",
    title: "Start with a clear plan",
    body: "Once approved, we set the milestones, name your point of contact, and begin — with progress visible each week."
  }
];

/* Fallback FAQ used when a service does not define its own `faqs`. */
export const serviceDetailFaqs: Faq[] = [
  {
    q: "How quickly can we get a quote?",
    a: "Most scopes come back within two working days. If the requirement is complex, we will tell you within a day what else we need to price it properly."
  },
  {
    q: "Do you work with fixed prices or hourly rates?",
    a: "Defined project work is quoted at a fixed price against a written scope. Ongoing support and retained work runs on a monthly or hourly agreement, whichever fits better."
  },
  {
    q: "What do you need from us to begin?",
    a: "A clear goal, a decision maker who can approve scope, and access to any existing systems. We handle the technical discovery ourselves."
  },
  {
    q: "Can you work with our existing team or platform?",
    a: "Yes. We regularly extend in-house teams and build on top of existing sites, CRMs, and hosting rather than insisting on a rebuild."
  },
  {
    q: "What happens after launch?",
    a: "You get a handover, documentation, and a support window. Ongoing maintenance, optimization, and feature work are available as a separate agreement."
  }
];

export const whyPoints = [
  {
    title: "One connected system",
    body: "Design, software, and growth under one roof — so your website, workflows, and reporting actually work together."
  },
  {
    title: "Built for operators",
    body: "Practical tools shaped around how your team really works, not how a template thinks it should."
  },
  {
    title: "Senior, hands-on team",
    body: "Experienced people on your project from day one — accountable, communicative, and invested in the outcome."
  },
  {
    title: "Transparent and accountable",
    body: "Clear scope, honest timelines, and ongoing support long after launch day."
  }
];

export const servicesFaqs = [
  {
    q: "Can you handle both design and development?",
    a: "Yes. We take projects end to end — strategy, UX/UI design, development, launch, and ongoing support — so nothing falls between hand-offs."
  },
  {
    q: "Do you work in phases or all at once?",
    a: "We work in clear milestones. You always know what is being built, when, and what comes next, with room to adjust as we learn."
  },
  {
    q: "Can you work with our existing website or tools?",
    a: "Absolutely. We regularly redesign existing sites and integrate with the CRMs, platforms, and tools you already use."
  },
  {
    q: "How do we choose the right services?",
    a: "Start with a quick consultation. We will assess your goals and recommend the smallest set of services that gets you the biggest result."
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Maintenance, optimization, and security are core services — we stay involved so your product keeps improving instead of aging."
  }
];

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({ service, category }))
);

export function getServiceBySlug(slug: string) {
  return allServices.find((entry) => entry.service.slug === slug);
}

export function relatedServices(slug: string, category: ServiceCategory) {
  return category.services.filter((service) => service.slug !== slug).slice(0, 3);
}
