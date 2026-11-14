import Link from "next/link";
export const metadata = { title: "Our products" };
export default function Page() {
  return <>
    <section className="inner-hero"><div className="container"><div className="eyebrow">LINKOCONCEPT / PRODUCTS</div><h1>Our products</h1><p>Digital products developed to address practical business needs.</p></div></section>
    <section className="content-section"><div className="container"><p>LINKOCONCEPT develops its own digital products alongside client-focused digital services. Each product will be presented with accurate capabilities, status and demonstration information.</p><div className="content-grid"><article className="info-card"><h3>Product 001 — LUXECUTS SALON</h3><p>A premium salon website concept with online booking and management functionality. The demonstration is still under development.</p></article>
<article className="info-card"><h3>A growing collection</h3><p>Our product catalogue is designed to expand as additional products are researched, developed and tested.</p></article></div>
    <p style={{marginTop: 35}}><Link className="text-link" href="/contact">Make an enquiry →</Link></p></div></section>
  </>;
}
