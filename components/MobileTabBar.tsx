"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export default function MobileTabBar() {
  const pathname = usePathname() || "/";

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");
  const isAbout = pathname === "/about";

  return (
    <nav className="mobile-tabbar" aria-label="Mobile navigation">
      <Link href="/" className={`mobile-tab${isHome ? " is-active" : ""}`}>
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10v9h12v-9" />
        </svg>
        <span>Home</span>
      </Link>

      <Link href="/services" className={`mobile-tab${isServices ? " is-active" : ""}`}>
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1.6" />
          <rect x="13" y="4" width="7" height="7" rx="1.6" />
          <rect x="4" y="13" width="7" height="7" rx="1.6" />
          <rect x="13" y="13" width="7" height="7" rx="1.6" />
        </svg>
        <span>Services</span>
      </Link>

      <Link href="/#contact" className="mobile-tab-cta" aria-label="Start a project">
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Link>

      <Link href="/about" className={`mobile-tab${isAbout ? " is-active" : ""}`}>
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <circle cx="12" cy="8.5" r="3.4" />
          <path d="M5.5 19c0-3 2.9-5 6.5-5s6.5 2 6.5 5" />
        </svg>
        <span>About</span>
      </Link>

      <a href="/#contact" className="mobile-tab">
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.4" />
          <path d="m4.5 7 7.5 5.5L19.5 7" />
        </svg>
        <span>Contact</span>
      </a>
    </nav>
  );
}
