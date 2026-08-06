import AgileProcessSection from "@/components/AgileProcessSection";
import ClientReviewsCarousel from "@/components/ClientReviewsCarousel";
import ContactForm from "@/components/ContactForm";
import CrmErpShowcase from "@/components/CrmErpShowcase";
import HeroBackgroundScene from "@/components/HeroBackgroundScene";
import IndustrySpecializations from "@/components/IndustrySpecializations";
import ScrollAnimator from "@/components/ScrollAnimator";
import ServiceStackShowcase from "@/components/ServiceStackShowcase";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TechStackMarquee from "@/components/TechStackMarquee";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blog/blog-data";

const systemFlow = [
  {
    title: "Build",
    detail: "Websites, Apps & CRM",
    outcome: "Ship the product"
  },
  {
    title: "Automate",
    detail: "Workflows & CRM hand-offs",
    outcome: "Move the lead"
  },
  {
    title: "AI",
    detail: "Agents & consultation",
    outcome: "Work smarter"
  },
  {
    title: "Revenue",
    detail: "Follow-up & performance",
    outcome: "Grow faster"
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
  },
  {
    name: "Intracia Technologies",
    category: "Technology services",
    logo: "/client-logos/intracia-technologies.png",
    tone: "tech",
    plate: true
  },
  {
    name: "ProfitPulse LLC",
    category: "Financial services",
    logo: "/client-logos/profit-pulse.png",
    tone: "tech",
    plate: true
  },
  {
    name: "Intra Tours and Travels",
    category: "Travel and bookings",
    logo: "/client-logos/intra-tours-travels.png",
    tone: "rental",
    plate: true
  },
  {
    name: "DriveX Auto Parts",
    category: "Auto parts",
    logo: "/client-logos/drivex-auto-parts.webp",
    tone: "auto"
  },
  {
    name: "Mr Bhahuk Gaming",
    category: "Gaming and creator",
    logo: "/client-logos/mr-bhahuk-gaming.webp",
    tone: "tech"
  },
  {
    name: "Mr JD Gaming",
    category: "Gaming and creator",
    logo: "/client-logos/mr-jd-gaming.png",
    tone: "tech"
  },
  {
    name: "LionX Gaming",
    category: "Gaming and creator",
    logo: "/client-logos/lionx-gaming.webp",
    tone: "tech"
  },
  {
    name: "Play With Bhahuk",
    category: "Games and apps",
    logo: "/client-logos/play-with-bhahuk-wordmark.svg",
    tone: "tech"
  },
  {
    name: "Pandit Suresh Sharma Ji",
    category: "Astrology",
    logo: "/client-logos/pandit-suresh-sharma.png",
    tone: "foods",
    plate: true
  },
  {
    // Placeholder wordmark: the client site publishes no brand logo asset.
    name: "Subhash Chandra Jyotish",
    category: "Astrology",
    logo: "/client-logos/subhash-chandra-jyotish-wordmark.svg",
    tone: "foods"
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

/* The homepage teaser always shows the three newest posts. */
const insightCards = blogPosts.slice(0, 3);

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
              <p className="eyebrow">Development · AI Automation · Revenue Systems</p>
              <p className="audience-line">
                For ambitious service brands, consultants, and growth teams ready
                to <strong>move faster and convert with confidence.</strong>
              </p>
              <h1
                className="hero-title"
                aria-label="Websites, Apps and CRM, powered by AI to grow revenue"
              >
                <span className="title-line">
                  <span>Websites,</span>
                  {" "}
                  <span>Apps &amp; CRM,</span>
                </span>
                {" "}
                <span className="title-line">
                  <span>Powered by</span>
                  {" "}
                  <span className="innovation-word">AI</span>
                  {" "}
                  <span>to Grow Revenue</span>
                </span>
              </h1>
              <p className="intro">
                We design and build{" "}
                <strong>high-converting websites, apps, and CRMs</strong> — then wire in
                AI automation so every lead, follow-up, and hand-off runs as{" "}
                <strong>one revenue workflow.</strong>
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
            <div className="system-flow" aria-label="Build, automate, AI, and revenue system">
              {systemFlow.map((stage) => (
                <div key={stage.title}>
                  <strong>{stage.title}</strong>
                  <span>{stage.detail}</span>
                  <small>{stage.outcome}</small>
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
                  <article
                    className={`client-logo-card client-logo-${client.tone}${client.plate ? " client-logo-plated" : ""}`}
                    key={client.name}
                  >
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
                  <article
                    className={`client-logo-card client-logo-${client.tone}${client.plate ? " client-logo-plated" : ""}`}
                    key={`${client.name}-duplicate`}
                  >
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
            <Link href="/blog" className="insight-viewall">
              Read the blog
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="insight-grid">
            {insightCards.map((post) => (
              <Link
                className="insight-card"
                key={post.slug}
                href={`/blog/${post.slug}`}
                aria-label={`${post.title} — read note`}
              >
                <div className="insight-card-top">
                  <span className="insight-tag">{post.category}</span>
                  <span className="insight-readtime">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="insight-more">
                  Read note
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
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
                <span>Site No. 157, 9th Main, Sector 06, HSR Layout, Bengaluru, Karnataka, 560102</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
