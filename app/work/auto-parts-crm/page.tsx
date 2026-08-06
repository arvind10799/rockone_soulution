import type { Metadata } from "next";
import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import CrmScrollSequence from "@/components/CrmScrollSequence";
import { DashboardScreen, OrderDetailScreen } from "@/components/CrmMockScreens";
import "./crm-mock.css";
import "./case-study.css";

export const metadata: Metadata = {
  title: "Auto Parts CRM Case Study | Rock One Solutions",
  description:
    "How Rock One Solutions designed and built the Auto Parts CRM for Intracia Technologies — one workspace that carries a lead through quoting, orders, signed invoices, and shipment tracking."
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Split into lines so each can rise out of its own mask. */
const heroHeadline = [
  "One workspace that carries an",
  "auto-parts lead from first call",
  "to signed invoice."
];

const meta = [
  { label: "Client", value: "Intracia Technologies" },
  { label: "Product", value: "MEE Auto Parts CRM" },
  { label: "Industry", value: "Auto parts distribution" },
  { label: "Project type", value: "Internal product" },
  { label: "Deliverables", value: "Product strategy, UX / UI design, custom software, workflow automation" },
  { label: "Platform", value: "Responsive web application" }
];

/* Product facts counted from the shipped build — swap in commercial results
   (revenue, response time, conversion lift) once the client shares them. */
const stats = [
  { value: "7", label: "workspaces", note: "Dashboard, Leads, Orders, Shipments, Costs, Notes, User Center" },
  { value: "3", label: "access roles", note: "Admin, sales agent, and shipping account — each sees a different app" },
  { value: "6", label: "lead stages", note: "Prospect through converted, with reasons captured on every drop-off" },
  { value: "1", label: "record end to end", note: "The same order carries quote, invoice, signature, and shipment" }
];

const problems = [
  {
    title: "Leads lived in three places",
    body:
      "Inbound calls, marketplace inquiries, and follow-ups were split across spreadsheets, inboxes, and personal notes. Nobody could say what was still open."
  },
  {
    title: "Quotes did not become orders",
    body:
      "Converting a quote meant retyping customer, vehicle, and part details into a second system — so quotes went cold while the paperwork caught up."
  },
  {
    title: "Invoicing stalled on signatures",
    body:
      "Invoices were generated outside the workflow, emailed manually, and chased over phone. No one could see whether a customer had signed."
  },
  {
    title: "Shipping was a black box",
    body:
      "BOL and PRO numbers sat with the carrier desk. Sales had no way to answer 'where is my part?' without forwarding the question."
  }
];

const flow = [
  { step: "01", title: "Lead captured", body: "Customer, vehicle, part, and adviser recorded in one form." },
  { step: "02", title: "Quoted", body: "Quote value and currency attached to the lead, visible in the pipeline." },
  { step: "03", title: "Converted", body: "One action promotes a qualified lead into a live order — no retyping." },
  { step: "04", title: "Order built", body: "Pricing, billing, shipping, and part detail on a single order record." },
  { step: "05", title: "Invoiced", body: "Invoice generated in-app, downloadable as PDF, sent for signature." },
  { step: "06", title: "Signed", body: "Signing links issued, re-sent, and regenerated without leaving the order." },
  { step: "07", title: "Shipped", body: "BOL and PRO numbers tracked, with delays surfaced as exceptions." },
  { step: "08", title: "Reported", body: "Revenue, conversion, and pipeline health roll up to the dashboard." }
];

/* The per-module "what it protects" copy now lives beside its screen in
   components/CrmMockScreens.tsx, so the scroll sequence renders both together. */

const roles = [
  {
    name: "Admin",
    body: "Full estate: every lead, order, shipment, cost line, and user account, plus invoice generation and signature control.",
    items: ["All workspaces", "Invoice + signature control", "User creation and revocation", "Cost tracking"]
  },
  {
    name: "Sales agent",
    body: "A focused app — a personal command center, their own leads, their own orders, and nothing else competing for attention.",
    items: ["Personal dashboard", "Own leads and orders", "Quote to order conversion", "Notes"]
  },
  {
    name: "Shipping account",
    body: "Fulfilment-side access for carrier coordination, built so shipping staff never touch pricing or customer financials.",
    items: ["Shipment records", "BOL / PRO updates", "Delivery status", "Shipment notes"]
  }
];

const palette = [
  { name: "Action blue", hex: "#2563EB", role: "Primary actions, links, active nav" },
  { name: "Ink", hex: "#0B1830", role: "Headings and figures" },
  { name: "Slate", hex: "#66748B", role: "Body copy and helper text" },
  { name: "Confirm", hex: "#0F7A4D", role: "Paid, active, invoiced states" },
  { name: "Attention", hex: "#D97706", role: "Follow-ups and partial payments" },
  { name: "Exception", hex: "#DC2626", role: "Delays and outstanding balance" }
];

const principles = [
  {
    title: "The number first, the label second",
    body:
      "Every card leads with the figure at display weight, then explains it. A manager scanning the dashboard reads values before they read words."
  },
  {
    title: "Status is a colour, not a sentence",
    body:
      "In transit, invoiced, active, converted — each state has one chip treatment used identically across leads, orders, shipments, and users."
  },
  {
    title: "Actions sit on the object they act on",
    body:
      "Invoice controls live on the order. Convert-to-order lives on the lead row. Nothing important hides behind a menu two levels deep."
  },
  {
    title: "Dense, but never cramped",
    body:
      "Tables carry eight columns at a comfortable 44px row height, on a soft blue-white canvas that keeps long shifts easy on the eyes."
  }
];

const outcomes = [
  "A quote becomes an order in one action, carrying customer, vehicle, and part detail with it.",
  "Invoice generation, delivery, signing, and re-issue happen inside the order — never in a side channel.",
  "Every order answers 'what happened and who did it' from a single timeline.",
  "Sales, admin, and shipping work from the same data with three different levels of access.",
  "Delays are counted as their own metric, so exception handling is the first job of the day.",
  "Revenue, paid, partially paid, and outstanding balance are visible without exporting anything."
];

const stack = ["Next.js", "React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL", "PDF generation", "E-signature flow", "Role-based auth"];

export default function AutoPartsCrmCaseStudy() {
  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="work" tone="dark" />

      <main className="cs-main">
        {/* Fixed live background: drifting glow, panning mesh, light streaks. */}
        <div className="cs-ambient" aria-hidden="true">
          <span className="cs-ambient-blob" />
          <span className="cs-ambient-blob" />
          <span className="cs-ambient-blob" />
          <span className="cs-ambient-blob" />
          <span className="cs-ambient-streak" />
          <span className="cs-ambient-streak" />
          <span className="cs-ambient-mesh" />
        </div>

        <section className="cs-hero">
          <div className="cs-hero-inner">
            <nav className="cs-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/crm-systems">Work</Link>
              <span aria-hidden="true">/</span>
              <strong>Auto Parts CRM</strong>
            </nav>

            <span className="cs-kicker">Case study</span>

            {/* Each line is masked by its own overflow container so the text
                rises out of nothing rather than fading in place. */}
            <h1 aria-label={heroHeadline.join(" ")}>
              {heroHeadline.map((line, index) => (
                <span className="cs-hero-line" key={line} aria-hidden="true">
                  <span style={{ ["--line" as string]: `${index}` }}>{line}</span>
                </span>
              ))}
            </h1>

            <p className="cs-lede">
              Intracia Technologies runs MEE Auto Parts, a US aftermarket parts operation
              where a single sale touches quoting, order entry, invoicing, e-signature,
              carrier handoff, and payment follow-up. We designed and built the CRM that
              holds all of it on one record.
            </p>

            <dl className="cs-meta">
              {meta.map((item, index) => (
                <div key={item.label} style={{ ["--meta-index" as string]: `${index}` }}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="cs-showcase" aria-label="Auto Parts CRM sales dashboard">
          {/* Open-laptop shell. The screen is a 16:10 size container, so the
              mock inside scales to fill it exactly — see case-study.css. */}
          <div className="cs-laptop">
            <div className="cs-laptop-lid">
              <div className="cs-laptop-screen">
                <figure className="crm-frame cs-frame cs-frame-hero">
                  <div className="crm-frame-chrome" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <span>crm.meeautoparts.com/dashboard</span>
                  </div>
                  <DashboardScreen />
                </figure>
                <span className="cs-laptop-glare" aria-hidden="true" />
              </div>
            </div>
            <div className="cs-laptop-base" aria-hidden="true" />
          </div>
          <figcaption className="cs-caption">
            The sales command center — pipeline, follow-ups, shipment alerts, and revenue
            in one scroll-free view. <em>All customer records shown are sample data.</em>
          </figcaption>
        </section>

        <section className="cs-overview">
          <div className="cs-overview-copy" data-reveal="left">
            <span className="cs-section-kicker">The brief</span>
            <h2>Replace six tools with one operating system for the business.</h2>
            <p>
              The team was fast on the phone and slow on the paperwork. Leads were tracked
              in one place, orders in another, invoices in a third, and shipping status
              nowhere at all. Every handoff between those systems was a re-typed record and
              a chance to lose a sale.
            </p>
            <p>
              We mapped the real path of a part — inquiry, quote, order, invoice, signature,
              carrier, delivery, payment — and built a single application around that path.
              The result is a CRM where the object that starts as a lead is the same object
              that ends as a delivered, paid order.
            </p>
          </div>
          <ul className="cs-stats">
            {stats.map((stat) => (
              <li key={stat.label} data-reveal="right">
                <strong>{stat.value}</strong>
                <b>{stat.label}</b>
                <span>{stat.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cs-problem">
          <div className="cs-head" data-reveal="up">
            <span className="cs-section-kicker">The challenge</span>
            <h2>Four places where a sale quietly leaked.</h2>
          </div>
          <div className="cs-problem-grid">
            {problems.map((problem, index) => (
              <article key={problem.title} data-reveal="scale">
                <span className="cs-problem-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{problem.title}</h3>
                <p>{problem.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-flow">
          <div className="cs-head" data-reveal="up">
            <span className="cs-section-kicker">The approach</span>
            <h2>We designed the workflow first, then the screens.</h2>
            <p>
              Eight states, one record. Each step below is a real status in the system, not a
              diagram drawn after the fact.
            </p>
          </div>
          <ol className="cs-flow-track">
            {flow.map((item) => (
              <li key={item.step} data-reveal="up">
                <span className="cs-flow-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="cs-seq-section" aria-labelledby="cs-seq-title">
          <div className="cs-head" data-reveal="up">
            <span className="cs-section-kicker">Product tour</span>
            <h2 id="cs-seq-title">Six screens that do the whole job.</h2>
            <p>
              Every interface below is the shipped design, populated with sample records.
              Keep scrolling to step through the workflow the way the team does.
            </p>
          </div>
          <CrmScrollSequence />
        </section>

        <section className="cs-spotlight">
          <div className="cs-spotlight-copy" data-reveal="left">
            <span className="cs-section-kicker">Spotlight</span>
            <h2>The invoice screen that ended the chasing.</h2>
            <p>
              The order view puts invoice generation, PDF download, editing, signature
              requests, and fresh signing links in a single row of controls — and writes each
              of those actions into the notes timeline beside it.
            </p>
            <p>
              When a customer says they never received the invoice, the answer is on screen:
              who sent it, when it was re-sent, and when the last signing link was issued.
            </p>
            <ul className="cs-check-list">
              <li>Invoice state shown as a status chip, not buried in a sub-page</li>
              <li>Signature requests re-sent without regenerating the document</li>
              <li>Signing links reissued when a customer loses the email</li>
              <li>Every event stamped with author and time on the same screen</li>
            </ul>
          </div>
          <figure className="crm-frame cs-frame cs-frame-spotlight">
            <div className="crm-frame-chrome" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>crm.meeautoparts.com/orders/MAP08042603</span>
            </div>
            <OrderDetailScreen />
          </figure>
        </section>

        <section className="cs-system">
          <div className="cs-head" data-reveal="up">
            <span className="cs-section-kicker">Design system</span>
            <h2>A visual language built for eight-hour shifts.</h2>
          </div>

          <div className="cs-system-grid">
            <div className="cs-palette" data-reveal="left">
              <h3>Palette</h3>
              <ul>
                {palette.map((swatch) => (
                  <li key={swatch.hex}>
                    <span className="cs-swatch" style={{ background: swatch.hex }} aria-hidden="true" />
                    <div>
                      <b>{swatch.name}</b>
                      <code>{swatch.hex}</code>
                      <small>{swatch.role}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-principles" data-reveal="right">
              <h3>Interface principles</h3>
              {principles.map((principle) => (
                <article key={principle.title}>
                  <h4>{principle.title}</h4>
                  <p>{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-roles">
          <div className="cs-head" data-reveal="up">
            <span className="cs-section-kicker">Access model</span>
            <h2>Three roles, three different applications.</h2>
          </div>
          <div className="cs-role-grid">
            {roles.map((role) => (
              <article key={role.name} data-reveal="scale">
                <h3>{role.name}</h3>
                <p>{role.body}</p>
                <ul>
                  {role.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-quote">
          <blockquote data-reveal="settle">
            <p>
              The measure of a CRM is not how much it can store. It is whether the person on
              the phone can see the next action without opening a second tab.
            </p>
            <cite>Design principle behind the Auto Parts CRM</cite>
          </blockquote>
        </section>

        <section className="cs-results">
          <div className="cs-head" data-reveal="up">
            <span className="cs-section-kicker">The outcome</span>
            <h2>What the team got.</h2>
          </div>
          <ul className="cs-outcome-list">
            {outcomes.map((outcome) => (
              <li key={outcome} data-reveal="up">
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4 4 10-10" />
                  </svg>
                </span>
                {outcome}
              </li>
            ))}
          </ul>
          <div className="cs-stack" data-reveal="up">
            <span className="cs-section-kicker">Built with</span>
            <div>
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-cta" data-reveal="scale">
          <div>
            <span className="cs-section-kicker">Next</span>
            <h2>Have a workflow that lives in six tools?</h2>
            <p>
              We design and build internal systems that hold an entire operation on one
              record — from first inquiry to final payment.
            </p>
          </div>
          <div className="cs-cta-actions">
            <Link href="/contact" className="about-btn-primary">
              Start a project {arrow}
            </Link>
            <Link href="/services/crm-systems" className="about-btn-ghost">
              Explore CRM systems
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
