import AgileProcessSection from "@/components/AgileProcessSection";
import ClientReviewsCarousel from "@/components/ClientReviewsCarousel";
import CrmErpShowcase from "@/components/CrmErpShowcase";
import HeroBackgroundScene from "@/components/HeroBackgroundScene";
import IndustrySpecializations from "@/components/IndustrySpecializations";
import ScrollAnimator from "@/components/ScrollAnimator";
import ServiceStackShowcase from "@/components/ServiceStackShowcase";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TechStackMarquee from "@/components/TechStackMarquee";
import Image from "next/image";

const systemFlow = [
  {
    title: "Website",
    detail: "Convert the visit"
  },
  {
    title: "Automation",
    detail: "Move the lead"
  },
  {
    title: "Revenue",
    detail: "Follow up faster"
  }
];

const clientLogos = [
  {
    name: "MeeAutoParts",
    category: "Motor equipment essentials",
    logo: "/client-logos/mee-auto-parts.png",
    tone: "auto"
  },
  {
    name: "SSP group",
    category: "Innovation group",
    logo: "/client-logos/ssp-group.png",
    tone: "properties"
  },
  {
    name: "American Freight Hub",
    category: "Logistics",
    logo: "/client-logos/american-freight-hub.png",
    tone: "tech"
  },
  {
    name: "Ferme Foods",
    category: "Foods",
    logo: "/client-logos/ferme-foods.png",
    tone: "foods"
  },
  {
    name: "Mee Car Rentals",
    category: "Bookings",
    logo: "/client-logos/mee-car-rentals.png",
    tone: "rental"
  }
];

const platformCards = [
  {
    title: "WordPress",
    focus: "Content & editorial",
    logo: "/platform-logos/wordpress.svg",
    body:
      "Flexible, editorial websites for service brands that need fast publishing, clean structure, and room to scale."
  },
  {
    title: "Shopify",
    focus: "E-commerce",
    logo: "/platform-logos/shopify.svg",
    body:
      "Commerce experiences built for clean product discovery, confident checkout, and operational handoff."
  },
  {
    title: "Magento",
    focus: "Enterprise commerce",
    logo: "/platform-logos/magento.svg",
    body:
      "Robust storefront architecture for deeper catalog logic, performance needs, and revenue visibility."
  }
];

const clientReviews = [
  {
    quote:
      "Our old website was costing us leads. The redesign and SEO work helped us attract better inquiries and communicate trust in the real estate market.",
    name: "Ranjana",
    company: "S&S Properties"
  },
  {
    quote:
      "They designed an e-commerce website that looks stunning and is easy for customers to use. We saw stronger online sales and a smoother buying journey.",
    name: "Pavithra",
    company: "Ferme Foods"
  },
  {
    quote:
      "We needed a professional web presence for the auto parts industry, and they delivered a modern website that makes our products easier to explore.",
    name: "Roni",
    company: "Meehikaa Auto Parts"
  },
  {
    quote:
      "The custom website established credibility for our BPO center. It presents our services clearly, loads quickly, and feels aligned with our business.",
    name: "Ayan",
    company: "Intracia Technologies"
  },
  {
    quote:
      "The new site improved our booking experience. Customers appreciate the clean interface, and our operations team can manage inquiries more easily.",
    name: "Roni",
    company: "Mee Car Rental"
  }
];

const insightCards = [
  {
    category: "Web Design",
    readTime: "4 min read",
    title: "Designing for trust before traffic",
    body:
      "A premium website should make the business feel credible in seconds, then guide visitors toward a clear next action."
  },
  {
    category: "Automation",
    readTime: "5 min read",
    title: "Turning campaigns into measurable handoffs",
    body:
      "SEO and paid media perform better when every lead has a clean route into CRM, follow-up, and reporting."
  },
  {
    category: "Growth",
    readTime: "3 min read",
    title: "Using automation where it actually helps",
    body:
      "The goal is not more tools. It is fewer missed inquiries, faster response times, and better visibility for the team."
  }
];

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <SiteHeader active="home" />

      <main>
        <section className="hero">
          <HeroBackgroundScene />
          <div className="hero-live-bg" aria-hidden="true">
            <span className="live-orbit live-orbit-one" />
            <span className="live-orbit live-orbit-two" />
            <span className="live-data live-data-one" />
            <span className="live-data live-data-two" />
            <span className="live-node live-node-one" />
            <span className="live-node live-node-two" />
            <span className="live-beam live-beam-one" />
            <span className="live-beam live-beam-two" />
            <span className="live-packet live-packet-one" />
            <span className="live-packet live-packet-two" />
            <span className="live-packet live-packet-three" />
            <span className="live-scan live-scan-one" />
            <span className="live-scan live-scan-two" />
            <span className="live-mesh" />
            <span className="live-ribbon live-ribbon-one" />
            <span className="live-ribbon live-ribbon-two" />
            <span className="live-panel live-panel-one" />
            <span className="live-panel live-panel-two" />
            <span className="live-panel live-panel-three" />
          </div>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Website development + revenue automation agency</p>
              <p className="audience-line">
                For ambitious service brands, consultants, and growth teams ready
                to{" "}
                <strong>look sharper, move faster, and convert with confidence.</strong>
              </p>
              <h1 className="hero-title" aria-label="Elevate Your Brand Through Innovation">
                <span className="title-line">
                  <span>Elevate</span>
                  {" "}
                  <span>Your Brand</span>
                </span>
                {" "}
                <span className="title-line">
                  <span>Through</span>
                  {" "}
                  <span className="innovation-word">Innovation</span>
                </span>
              </h1>
              <p className="intro">
                We craft <strong>polished, conversion-focused websites</strong> and
                connect every lead, CRM handoff, follow-up sequence, and performance
                signal into <strong>one revenue workflow.</strong>
              </p>
              <div className="actions" aria-label="Hero actions">
                <a href="#contact" className="primary-action">
                  Book a Strategy Call
                </a>
                <a href="#services" className="secondary-action">
                  Explore What We Build
                </a>
              </div>
            </div>
            <div className="system-flow" aria-label="Website automation revenue system">
              {systemFlow.map((stage) => (
                <div key={stage.title}>
                  <strong>{stage.title}</strong>
                  <span>{stage.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="client-logo-strip flow-section" aria-label="Selected client partnerships">
          <div className="client-strip-header">
            <span>Selected client partnerships</span>
            <strong>Websites, automation, and growth systems built for real operators.</strong>
          </div>
          <div className="logo-marquee" aria-label="Client logos">
            <div className="logo-marquee-track">
              <div className="logo-marquee-group">
                {clientLogos.map((client) => (
                  <article className={`client-logo-card client-logo-${client.tone}`} key={client.name}>
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="client-logo-image"
                      width={360}
                      height={96}
                    />
                  </article>
                ))}
              </div>
              <div className="logo-marquee-group" aria-hidden="true">
                {clientLogos.map((client) => (
                  <article className={`client-logo-card client-logo-${client.tone}`} key={`${client.name}-duplicate`}>
                    <Image
                      src={client.logo}
                      alt=""
                      className="client-logo-image"
                      width={360}
                      height={96}
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <span className="section-anchor" id="services" aria-hidden="true" />
        <span className="section-anchor" id="about" aria-hidden="true" />

        <ServiceStackShowcase />

        <section className="platform-section flow-section flow-left" aria-labelledby="platform-title">
          <div className="platform-copy">
            <span className="section-kicker platform-kicker">CMS platforms tailored for client needs</span>
            <h2 id="platform-title">The right platform, shaped around the business model.</h2>
            <p>
              From editorial websites to e-commerce storefronts, the homepage should
              reassure visitors that the technical foundation is selected with intent,
              not convenience.
            </p>
          </div>
          <div className="platform-grid">
            {platformCards.map((platform, index) => (
              <article className="platform-card" key={platform.title}>
                <span className="platform-badge">
                  <img
                    src={platform.logo}
                    alt={`${platform.title} logo`}
                    className="platform-badge-logo"
                    width={28}
                    height={28}
                  />
                </span>
                <div className="platform-card-body">
                  <div className="platform-card-titles">
                    <h3>{platform.title}</h3>
                    <span className="platform-focus">{platform.focus}</span>
                  </div>
                  <p>{platform.body}</p>
                </div>
                <span className="platform-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </section>

        <AgileProcessSection />

        <TechStackMarquee />

        <section className="crm-erp-section flow-section flow-right" id="crm-erp" aria-labelledby="crm-erp-title">
          <div className="crm-erp-copy">
            <span className="section-kicker crm-kicker">CRM and ERP systems</span>
            <h2 id="crm-erp-title">Business software that keeps sales, operations, and reporting in one flow.</h2>
            <p>
              Beyond websites, we build CRM and ERP layers for teams that need cleaner
              lead handling, faster internal coordination, and sharper visibility across
              daily operations.
            </p>
          </div>

          <div className="crm-erp-showcase" aria-label="CRM and ERP capabilities in real use">
            <CrmErpShowcase />
          </div>
        </section>

        <ClientReviewsCarousel reviews={clientReviews} />

        <IndustrySpecializations />

        <section className="insight-section flow-section flow-right" id="blog" aria-labelledby="insight-title">
          <div className="insight-header">
            <div className="insight-heading">
              <span className="section-kicker insight-kicker">Growth notes</span>
              <h2 id="insight-title">Sharper thinking for websites, automation, and revenue.</h2>
              <p>
                Practical perspectives on building a stronger digital presence and the
                systems that turn attention into measurable revenue.
              </p>
            </div>
            <a href="#contact" className="insight-viewall">
              Read the blog
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="insight-grid">
            {insightCards.map((card) => (
              <a className="insight-card" key={card.title} href="#contact" aria-label={`${card.title} — read note`}>
                <div className="insight-card-top">
                  <span className="insight-tag">{card.category}</span>
                  <span className="insight-readtime">{card.readTime}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="insight-more">
                  Read note
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section flow-section flow-left" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="section-kicker">Our info</span>
              <h2 id="contact-title">Ready to turn your website into a revenue system?</h2>
              <p>
                Share a few details and we will map the website, automation, and growth
                workflow your business actually needs.
              </p>
              <div className="contact-details" aria-label="Contact details">
                <a href="tel:+918197731627">+91 8197731627</a>
                <a href="mailto:Info@rockonesolutions.com">Info@rockonesolutions.com</a>
                <span>BHIVE Workspace, AKR Tech Park, Bengaluru</span>
              </div>
            </div>
            <form className="contact-form">
              <input aria-label="First name" placeholder="First name" />
              <input aria-label="Last name" placeholder="Last name" />
              <input aria-label="Email" type="email" placeholder="Email" />
              <input aria-label="Phone number" type="tel" placeholder="Phone number" />
              <button type="button">Send</button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
