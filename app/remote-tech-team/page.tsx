import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./remote-tech-team.css";

export const metadata: Metadata = {
  title: "Remote In-House Tech Team | Rock One Solutions",
  description:
    "Get a dedicated remote tech expert for recurring website, software, SEO, automation, and digital support without hiring a full-time employee."
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const painPoints = [
  "You have regular technical tasks, but not enough work for a full-time hire.",
  "Freelancers need context every time and timelines are not always reliable.",
  "Your team loses time chasing small fixes, updates, reports, and follow-ups.",
  "Hiring full-time means salary, HR, training, benefits, and idle capacity."
];

const workItems = [
  "Website updates and bug fixes",
  "WordPress, Shopify, and CMS tasks",
  "React, Next.js, and frontend tweaks",
  "Landing page and content changes",
  "SEO on-page implementation",
  "Tracking, pixels, and analytics setup",
  "CRM updates and workflow fixes",
  "Automation checks and reporting",
  "Performance and speed improvements",
  "Small software feature additions",
  "Deployment and hosting support",
  "Weekly technical reporting"
];

const processSteps = [
  {
    step: "01",
    title: "Workload discovery",
    body: "We understand your recurring tasks, tools, stack, urgency, and whether you need daily, weekly, or monthly support."
  },
  {
    step: "02",
    title: "Dedicated resource match",
    body: "We assign a remote expert or small managed team matched to your website, software, SEO, or automation needs."
  },
  {
    step: "03",
    title: "Reserved hours and priority",
    body: "Your agreed hours are protected. Tasks are acknowledged, planned, delivered, and reported through a clear channel."
  },
  {
    step: "04",
    title: "Ongoing reporting",
    body: "You get transparent updates on completed tasks, open items, time used, and what should be improved next."
  }
];

const comparison = [
  {
    label: "Cost",
    fullTime: "Full monthly salary and overhead",
    freelancer: "Variable task-by-task pricing",
    rockOne: "Pay for reserved capacity you need"
  },
  {
    label: "Continuity",
    fullTime: "Good, but expensive for low workload",
    freelancer: "Context often resets",
    rockOne: "Same team learns your systems"
  },
  {
    label: "Reliability",
    fullTime: "Available but may be underused",
    freelancer: "Depends on availability",
    rockOne: "Managed delivery and backup coverage"
  },
  {
    label: "Management",
    fullTime: "HR, reviews, payroll, training",
    freelancer: "You manage quality and timelines",
    rockOne: "One agency partner manages output"
  }
];

const plans = [
  {
    title: "Daily Support",
    body: "For teams that need small technical work every business day.",
    detail: "Fixed daily reserved hours"
  },
  {
    title: "Weekly Support",
    body: "For recurring updates, reports, improvements, and maintenance.",
    detail: "Planned weekly capacity"
  },
  {
    title: "Monthly Retainer",
    body: "For flexible ongoing work that changes week to week.",
    detail: "Block of hours per month"
  }
];

const trustPoints = [
  "Bengaluru-based agency team",
  "Reserved hours instead of vague priority",
  "Backup coverage when one person is unavailable",
  "NDA and confidentiality-friendly workflow",
  "Clear reporting and one point of contact"
];

const faqs = [
  {
    q: "Is this person only working for us?",
    a: "The model is based on reserved capacity. Depending on your plan, we block daily, weekly, or monthly hours for your work and protect that schedule. If you need a fully dedicated full-time resource, we can discuss that separately."
  },
  {
    q: "How do you guarantee priority?",
    a: "We avoid vague promises. Your plan defines reserved hours, response expectations, communication channels, and reporting so your tasks do not get lost behind random freelance availability."
  },
  {
    q: "Can we increase or reduce hours later?",
    a: "Yes. The point of this model is flexibility. We can start with a smaller block and adjust after we understand your real workload."
  },
  {
    q: "Who owns the code and work delivered?",
    a: "You own the work delivered for your business. We can also work under NDA and follow your access, repository, and documentation process."
  },
  {
    q: "What if we need urgent support?",
    a: "Urgent support can be added as a separate agreement depending on your stack and expected response time. We will clarify this before work starts."
  }
];

export default function RemoteTechTeamPage() {
  return (
    <>
      <SiteHeader active="remote" />

      <main className="remote-main">
        <section className="remote-hero" aria-labelledby="remote-hero-title">
          <div className="remote-hero-copy">
            <span className="about-badge">Remote in-house tech team</span>
            <h1 id="remote-hero-title">
              Get a dedicated tech expert without the full-time salary.
            </h1>
            <p>
              For companies that have regular technical work, but only one or two
              hours a day or a few hours a week, Rock One gives you a reliable remote
              resource with reserved priority.
            </p>
            <div className="remote-hero-actions">
              <Link href="/#contact" className="about-btn-primary">
                Book a free consultation {arrow}
              </Link>
              <a href="tel:+918197731627" className="about-btn-ghost">
                Talk to us
              </a>
            </div>
          </div>

          <div className="remote-hero-panel" aria-label="Reserved remote support model">
            <div className="remote-panel-top">
              <span>Reserved hours</span>
              <strong>Priority support</strong>
            </div>
            <div className="remote-schedule-card">
              <span>Weekly capacity</span>
              <strong>8-20 hrs</strong>
              <p>Website, software, SEO, automation, and reporting tasks handled by one managed partner.</p>
            </div>
            <div className="remote-panel-list">
              <div>
                <span />
                Same team learns your systems
              </div>
              <div>
                <span />
                Clear task tracking and updates
              </div>
              <div>
                <span />
                No salary, HR, or idle capacity
              </div>
            </div>
          </div>
        </section>

        <section className="remote-problem" aria-labelledby="remote-problem-title">
          <div>
            <span className="section-kicker about-kicker">The problem</span>
            <h2 id="remote-problem-title">Too much recurring work for freelancers. Too little for a full-time hire.</h2>
          </div>
          <div className="remote-pain-grid">
            {painPoints.map((point) => (
              <article key={point}>
                <span />
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="remote-solution" aria-labelledby="remote-solution-title">
          <div className="remote-section-head">
            <span className="section-kicker about-kicker">The solution</span>
            <h2 id="remote-solution-title">A remote resource that feels like your in-house support team.</h2>
            <p>
              You get continuity, managed delivery, and protected hours without the
              cost and operational burden of hiring a full-time employee.
            </p>
          </div>
          <div className="remote-work-grid">
            {workItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="remote-process" aria-labelledby="remote-process-title">
          <div className="remote-section-head">
            <span className="section-kicker about-kicker">How it works</span>
            <h2 id="remote-process-title">Simple setup, predictable support, clear reporting.</h2>
          </div>
          <div className="remote-process-grid">
            {processSteps.map((step) => (
              <article key={step.step}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="remote-comparison" aria-labelledby="remote-comparison-title">
          <div className="remote-section-head">
            <span className="section-kicker about-kicker">Compare the model</span>
            <h2 id="remote-comparison-title">Why this works better for small recurring technical work.</h2>
          </div>
          <div className="remote-table" role="table" aria-label="Full-time hire versus freelancer versus Rock One remote team">
            <div className="remote-row remote-head" role="row">
              <span>Factor</span>
              <span>Full-time hire</span>
              <span>Freelancer</span>
              <span>Rock One remote team</span>
            </div>
            {comparison.map((row) => (
              <div className="remote-row" role="row" key={row.label}>
                <strong>{row.label}</strong>
                <span>{row.fullTime}</span>
                <span>{row.freelancer}</span>
                <span>{row.rockOne}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="remote-plans" aria-labelledby="remote-plans-title">
          <div className="remote-section-head">
            <span className="section-kicker about-kicker">Engagement models</span>
            <h2 id="remote-plans-title">Pay for the capacity you need, nothing more.</h2>
            <p>Plans are discussed after we understand your workload, urgency, and stack.</p>
          </div>
          <div className="remote-plan-grid">
            {plans.map((plan) => (
              <article key={plan.title}>
                <span>{plan.detail}</span>
                <h3>{plan.title}</h3>
                <p>{plan.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="remote-trust" aria-labelledby="remote-trust-title">
          <div>
            <span className="section-kicker about-kicker">Why Rock One</span>
            <h2 id="remote-trust-title">A managed partner, not another loose freelancer.</h2>
            <p>
              We are a Bengaluru-based digital and technology agency, so your remote
              resource is backed by process, supervision, and backup coverage.
            </p>
          </div>
          <ul>
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="remote-faq" aria-labelledby="remote-faq-title">
          <div className="about-faq-head">
            <span className="section-kicker about-kicker">FAQ</span>
            <h2 id="remote-faq-title">Questions before you hire remote support.</h2>
            <p>Not sure how many hours you need? We can estimate it together on a quick call.</p>
          </div>
          <div className="about-faq-list">
            {faqs.map((faq, index) => (
              <details className="about-faq-item" key={faq.q} open={index === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="about-faq-mark" aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="about-cta" aria-labelledby="remote-cta-title">
          <div className="about-cta-inner">
            <h2 id="remote-cta-title">Need regular tech work, but not a full-time employee?</h2>
            <p>
              Tell us what tasks come up every day or week. We will suggest a remote
              support model that fits your workload.
            </p>
            <div className="about-cta-actions">
              <Link href="/#contact" className="about-btn-primary">
                Discuss your workload {arrow}
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
