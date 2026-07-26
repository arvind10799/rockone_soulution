import Link from "next/link";

const navItems = [
  { label: "Blog", href: "/#blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" }
];

const services = [
  { label: "Custom Website Development", slug: "custom-website-development" },
  { label: "UX / UI Web Design", slug: "ux-ui-design" },
  { label: "Custom Software Development", slug: "custom-software-development" },
  { label: "CRM Systems", slug: "crm-systems" },
  { label: "Workflow Automation", slug: "workflow-automation" },
  { label: "Search Engine Optimization", slug: "seo" }
];

export default function SiteHeader({
  active
}: {
  active?: "home" | "about" | "services";
}) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Rock One Solutions home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-monogram">R</span>
            <span className="brand-one">1</span>
          </span>
          <span className="brand-text">
            <strong>Rock One</strong>
            <small>Solutions</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/" className={`nav-link${active === "home" ? " active" : ""}`}>
            Home
          </Link>
          <div className="nav-dropdown">
            <Link
              href="/services"
              className={`nav-link has-chevron${active === "services" ? " active" : ""}`}
            >
              Services
            </Link>
            <div className="dropdown-panel" aria-label="Services menu">
              {services.map((service) => (
                <Link href={`/services/${service.slug}`} key={service.slug}>
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <Link
              className={`nav-link${
                item.label === "About" && active === "about" ? " active" : ""
              }`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/#contact">
          Start a Project
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            <Link className={active === "home" ? "active" : ""} href="/">
              Home
            </Link>
            <Link className={active === "services" ? "active" : ""} href="/services">
              Services
            </Link>
            <details className="mobile-services" open>
              <summary>Explore services</summary>
              <div>
                {services.map((service) => (
                  <Link href={`/services/${service.slug}`} key={service.slug}>
                    {service.label}
                  </Link>
                ))}
              </div>
            </details>
            {navItems.map((item) => (
              <Link
                className={
                  item.label === "About" && active === "about" ? "active" : ""
                }
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
            <Link className="mobile-cta" href="/#contact">
              Start a Project
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
