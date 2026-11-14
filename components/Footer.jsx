import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand footer-logo">
            <span className="brand-symbol">L<span>.</span></span>
            <span className="brand-word">LINKO<span>CONCEPT</span><small>WEBSITE DEVELOPMENT & DIGITAL SOLUTIONS</small></span>
          </Link>
          <p>Thoughtful digital experiences.<br />Practical solutions. Built with purpose.</p>
        </div>
        <div className="footer-column">
          <span className="footer-heading">EXPLORE</span>
          <Link href="/about">About us</Link>
          <Link href="/showroom">Product showroom</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="footer-column">
          <span className="footer-heading">GET IN TOUCH</span>
          <a href="mailto:linkoconcept@gmail.com"><Mail size={15} /> linkoconcept@gmail.com</a>
          <Link href="/contact">Project enquiries <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} LINKOCONCEPT. All rights reserved.</span>
        <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}
