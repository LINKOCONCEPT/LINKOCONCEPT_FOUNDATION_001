import Link from "next/link";
export const metadata = { title: "Terms and conditions" };
export default function Page() {
  return <>
    <section className="inner-hero"><div className="container"><div className="eyebrow">LINKOCONCEPT / TERMS</div><h1>Terms and conditions</h1><p>Website use and service information.</p></div></section>
    <section className="content-section"><div className="container"><p>This page is a publication placeholder. Final terms must reflect the actual business arrangements, services, product licensing, payment and refund practices, and applicable law before publication.</p><div className="content-grid"><article className="info-card"><h3>Website information</h3><p>Content on this website should be accurate and kept current.</p></article>
<article className="info-card"><h3>Project agreements</h3><p>Specific deliverables, fees, timelines and responsibilities should be confirmed in a written project agreement.</p></article></div>
    <p style={{marginTop: 35}}><Link className="text-link" href="/contact">Make an enquiry →</Link></p></div></section>
  </>;
}
