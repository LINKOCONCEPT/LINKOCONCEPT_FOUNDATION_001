"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "/about"],
  ["Products", "/products"],
  ["Showroom", "/showroom"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="LINKOCONCEPT home" onClick={() => setOpen(false)}>
          <span className="brand-symbol">L<span>.</span></span>
          <span className="brand-word">LINKO<span>CONCEPT</span><small>WEBSITE DEVELOPMENT & DIGITAL SOLUTIONS</small></span>
        </Link>
        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="nav-contact" href="/contact" onClick={() => setOpen(false)}>Contact <ArrowUpRight size={15} /></Link>
        </nav>
      </div>
    </header>
  );
}
