import Link from "next/link";
export const metadata = { title: "Selected work" };
export default function Page() {
  return <>
    <section className="inner-hero"><div className="container"><div className="eyebrow">LINKOCONCEPT / PORTFOLIO</div><h1>Selected work</h1><p>A considered selection of projects and practical implementation work.</p></div></section>
    <section className="content-section"><div className="container"><p>We will publish projects with clear descriptions of the work performed, the technologies used and the role LINKOCONCEPT played. We do not publish invented performance figures or unsupported client claims.</p><div className="content-grid"><article className="info-card"><h3>LUXECUTS SALON</h3><p>LINKOCONCEPT Product 001 — a salon website and booking-management demonstration.</p></article>
<article className="info-card"><h3>Dony Joy Uche Seafood</h3><p>An e-commerce website and technical SEO project. Case-study details and evidence will be presented accurately.</p></article></div>
    <p style={{marginTop: 35}}><Link className="text-link" href="/contact">Make an enquiry →</Link></p></div></section>
  </>;
}
