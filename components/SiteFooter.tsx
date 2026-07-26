import Link from "next/link";

const footerServices = [
  { label: "Custom Website Development", slug: "custom-website-development" },
  { label: "Website Redesign", slug: "website-redesign" },
  { label: "Custom Software", slug: "custom-software-development" },
  { label: "CRM Systems", slug: "crm-systems" },
  { label: "SEO", slug: "seo" }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="footer-inner">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand" aria-label="Rock One Solutions home">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-monogram">R</span>
              <span className="brand-one">1</span>
            </span>
            <span className="brand-text">
              <strong>Rock One</strong>
              <small>Solutions</small>
            </span>
          </Link>
          <p>
            Premium websites, CRM-connected workflows, and growth systems for
            businesses that want a sharper digital front door.
          </p>
          <Link className="footer-cta" href="/#contact">
            Start a Project
          </Link>
        </div>

        <div className="footer-columns">
          <div>
            <strong>Explore</strong>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/#blog">Blog</Link>
          </div>
          <div>
            <strong>Services</strong>
            {footerServices.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                {service.label}
              </Link>
            ))}
          </div>
          <div>
            <strong>Contact</strong>
            <a href="tel:+918197731627">+91 8197731627</a>
            <a href="mailto:Info@rockonesolutions.com">Info@rockonesolutions.com</a>
            <span>BHIVE Workspace, AKR Tech Park, Bengaluru</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright 2026 Rock One Solutions. All rights reserved.</span>
        <span>Website development + revenue automation agency</span>
      </div>
    </footer>
  );
}
