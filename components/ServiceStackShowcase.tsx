"use client";

import { useEffect, useState } from "react";

const serviceGroups = [
  {
    category: "Software & Systems",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=82",
    intro:
      "Custom systems that replace scattered tools with clean, practical workflows.",
    services: [
      {
        title: "Custom Software Development",
        body: "Purpose-built tools for operations, reporting, and internal workflows."
      },
      {
        title: "CRM",
        body: "Lead tracking, client records, follow-up visibility, and team ownership."
      },
      {
        title: "ERP",
        body: "Approvals, documents, billing, tasks, and delivery status in one flow."
      },
      {
        title: "Workflow Automation",
        body: "Forms, handoffs, notifications, and reporting connected end to end."
      }
    ]
  },
  {
    category: "Application Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",
    intro:
      "Customer-facing websites and apps shaped around clarity, trust, and conversion.",
    services: [
      {
        title: "Website Development",
        body: "Premium, fast, responsive websites with conversion-led page structure."
      },
      {
        title: "Landing Pages",
        body: "Campaign-specific pages built for paid media, SEO, and lead capture."
      },
      {
        title: "eCommerce Builds",
        body: "Shopify and CMS storefronts with clean product discovery and checkout."
      },
      {
        title: "Custom Portals",
        body: "Client, vendor, team, and operations portals for repeated workflows."
      }
    ]
  },
  {
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=82",
    intro:
      "Growth work connected to measurable actions, not vanity reports.",
    services: [
      {
        title: "SEO Services",
        body: "Search foundations, local visibility, content structure, and technical fixes."
      },
      {
        title: "Paid Ads Management",
        body: "Campaign setup, tracking, landing page alignment, and conversion review."
      },
      {
        title: "Performance Marketing",
        body: "Lead quality, funnel movement, and revenue signals monitored together."
      },
      {
        title: "Marketing Automation",
        body: "Campaign leads pushed into CRM, follow-up, and reporting workflows."
      }
    ]
  },
  {
    category: "Support & Optimization",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=82",
    intro:
      "Reliable support after launch so systems keep improving instead of aging.",
    services: [
      {
        title: "Maintenance & Support",
        body: "Updates, fixes, content changes, and steady care for live websites."
      },
      {
        title: "Speed Optimization",
        body: "Performance reviews, frontend cleanup, and Core Web Vitals improvements."
      },
      {
        title: "Cloud & Hosting Support",
        body: "Deployment, hosting guidance, backups, and operational reliability."
      },
      {
        title: "Security Checks",
        body: "Practical hardening, form protection, access review, and monitoring."
      }
    ]
  }
];

export default function ServiceStackShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeGroup = serviceGroups[activeIndex];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % serviceGroups.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="what-we-do-section flow-section flow-left" aria-labelledby="what-we-do-title">
      <div className="what-we-do-header">
        <span className="section-kicker what-we-do-kicker">What can we do for you</span>
        <div className="what-we-do-header-body">
          <h2 id="what-we-do-title">
            Digital work that covers the <em>website</em>, the <em>software</em>,
            and the <em>growth&nbsp;layer</em>.
          </h2>
          <div className="what-we-do-lead">
            <p>
              Whether you need a sharper website, CRM/ERP software, revenue automation,
              or marketing support, Rock One becomes the technical partner that helps
              you build, connect, and scale with less operational friction.
            </p>
          </div>
        </div>
      </div>

      {/* Rotation pauses while the visitor is reading or tabbing through. */}
      <div
        className="service-board"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="service-category-stack" aria-label="Service categories">
          {serviceGroups.map((group, index) => (
            <button
              className={activeIndex === index ? "is-active" : ""}
              key={group.category}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{group.category}</strong>
            </button>
          ))}
        </div>

        <article className="service-detail-panel" key={activeGroup.category}>
          <div
            className="service-detail-image"
            style={{ backgroundImage: `url("${activeGroup.image}")` }}
            aria-hidden="true"
          >
            <span>{activeGroup.category}</span>
          </div>
          <div className="service-detail-content">
            <div>
              <h3>{activeGroup.category}</h3>
              <p>{activeGroup.intro}</p>
            </div>
            <div className="service-detail-grid">
              {activeGroup.services.map((service) => (
                <div className="service-detail-item" key={service.title}>
                  <h4>{service.title}</h4>
                  <p>{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
