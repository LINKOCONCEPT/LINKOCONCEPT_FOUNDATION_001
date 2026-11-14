import Link from "next/link";
export const metadata = { title: "Digital services" };
export default function Page() {
  return <>
    <section className="inner-hero"><div className="container"><div className="eyebrow">LINKOCONCEPT / SERVICES</div><h1>Digital services</h1><p>Practical website and digital services, delivered with care.</p></div></section>
    <section className="content-section"><div className="container"><p>Our services are focused on work we can genuinely plan, implement and support. Project scope, timelines and deliverables are agreed before work begins.</p><div className="content-grid"><article className="info-card"><h3>Website development</h3><p>Business websites and responsive web experiences designed around clear goals.</p></article>
<article className="info-card"><h3>E-commerce solutions</h3><p>Online storefronts and product experiences with practical content and navigation structures.</p></article>
<article className="info-card"><h3>WordPress development</h3><p>WordPress setup, improvements, maintenance and troubleshooting.</p></article>
<article className="info-card"><h3>Technical SEO</h3><p>Technical reviews and implementation focused on crawlability, indexability, site structure and performance.</p></article></div>
    <p style={{marginTop: 35}}><Link className="text-link" href="/contact">Make an enquiry →</Link></p></div></section>
  </>;
}
