import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  allServices,
  getServiceBySlug,
  nextSteps,
  processSteps,
  relatedServices,
  serviceDetailFaqs
} from "../services-data";
import "../services.css";

export function generateStaticParams() {
  return allServices.map(({ service }) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getServiceBySlug(slug);
  if (!entry) return { title: "Service | Rock One Solutions" };
  return {
    title: `${entry.service.title} | Rock One Solutions`,
    description: entry.service.summary
  };
}

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const tick = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4 4 10-10" />
  </svg>
);

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getServiceBySlug(slug);
  if (!entry) notFound();

  const { service, category } = entry;
  const related = relatedServices(service.slug, category);
  const faqs = service.faqs ?? serviceDetailFaqs;

  return (
    <>
      <SiteHeader active="services" />

      <main
        className="service-detail-main"
        style={{ ["--accent" as string]: category.accent }}
      >
        <section className="service-hero" aria-labelledby="service-title">
          <div className="service-hero-inner">
            <nav className="service-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/services">Services</Link>
              <span className="sep">/</span>
              <span className="current">{service.title}</span>
            </nav>
            <span className="service-tag">{category.name}</span>
            <h1 id="service-title">{service.title}</h1>
            <p className="service-tagline">{service.tagline}</p>
            <p className="service-summary">{service.summary}</p>
            <div className="service-hero-actions">
              <Link href="/contact" className="about-btn-primary">
                Start a Project {arrow}
              </Link>
              <Link href="/services" className="about-btn-ghost">
                All services
              </Link>
            </div>
          </div>
        </section>

        <section className="service-detail-body" aria-label={`${service.title} details`}>
          <div className="service-panel">
            <h2>What&rsquo;s included</h2>
            <ul className="service-list">
              {service.deliverables.map((item) => (
                <li key={item}>
                  <span className="service-tick">{tick}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="service-panel is-accent">
            <h2>Outcomes you can expect</h2>
            <ul className="service-list">
              {service.outcomes.map((item) => (
                <li key={item}>
                  <span className="service-tick">{tick}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="service-process" aria-labelledby="service-process-title">
          <div className="about-section-head">
            <span className="section-kicker about-kicker">How we deliver</span>
            <h2 id="service-process-title">A clear path from first call to lasting results.</h2>
          </div>
          <div className="services-process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.step}>
                <span className="process-step-num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-next" aria-labelledby="service-next-title">
          <div className="about-section-head">
            <span className="section-kicker about-kicker">Want more detail?</span>
            <h2 id="service-next-title">
              Here is exactly how to get {service.title.toLowerCase()} scoped and priced.
            </h2>
          </div>

          <div className="service-next-grid">
            <ol className="service-next-steps">
              {nextSteps.map((step) => (
                <li key={step.step}>
                  <span className="service-next-num">{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="service-next-card">
              <h3>Talk to someone who has built it</h3>
              <p>
                Ask about timelines, budget ranges, or whether {service.title} is even the
                right fit — we will tell you if it is not.
              </p>
              <div className="service-next-contacts">
                <a href="tel:+918197731627">
                  <span>Call</span>
                  <strong>+91 8197731627</strong>
                </a>
                <a href="mailto:Info@rockonesolutions.com">
                  <span>Email</span>
                  <strong>Info@rockonesolutions.com</strong>
                </a>
                <div>
                  <span>Typical reply</span>
                  <strong>Within one working day</strong>
                </div>
              </div>
              <Link href="/contact" className="about-btn-primary">
                Request a proposal {arrow}
              </Link>
            </aside>
          </div>

          <div className="service-next-faq">
            <h3>Common questions</h3>
            <div className="about-faq-list">
              {faqs.map((faq) => (
                <details className="about-faq-item" key={faq.q}>
                  <summary>
                    {faq.q}
                    <span className="about-faq-mark" aria-hidden="true" />
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section
            className="service-related"
            style={{ ["--accent" as string]: category.accent }}
            aria-labelledby="service-related-title"
          >
            <div className="about-section-head">
              <span className="section-kicker about-kicker">Related services</span>
              <h2 id="service-related-title">More ways we can help in {category.name}.</h2>
            </div>
            <div className="service-related-grid">
              {related.map((item) => (
                <Link
                  className="service-card"
                  key={item.slug}
                  href={`/services/${item.slug}`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.tagline}</p>
                  <span className="service-card-more">
                    Explore {arrow}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="about-cta" aria-labelledby="service-cta-title">
          <div className="about-cta-inner">
            <h2 id="service-cta-title">Ready to move forward with {service.title}?</h2>
            <p>
              Tell us about your goals and we will put together a clear plan, scope, and
              timeline — no pressure, just a useful conversation.
            </p>
            <div className="about-cta-actions">
              <Link href="/contact" className="about-btn-primary">
                Start a Project {arrow}
              </Link>
              <a href="tel:+918197731627" className="about-btn-ghost about-btn-ghost-dark">
                +91 8197731627
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
