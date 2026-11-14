import Link from "next/link";
export const metadata = { title: "About LINKOCONCEPT" };
export default function Page() {
  return <>
    <section className="inner-hero"><div className="container"><div className="eyebrow">LINKOCONCEPT / ABOUT</div><h1>About LINKOCONCEPT</h1><p>A digital solutions brand built around considered design, practical functionality and responsible delivery.</p></div></section>
    <section className="content-section"><div className="container"><p>We create professional web experiences and practical digital products for businesses. Our approach is grounded in clear communication, honest representation of our capabilities and careful implementation.</p><div className="content-grid"><article className="info-card"><h3>Our vision</h3><p>To build useful digital experiences and products that earn trust through quality and consistency.</p></article>
<article className="info-card"><h3>Our approach</h3><p>We plan carefully, build in stages, test real functionality and improve from evidence rather than assumptions.</p></article>
<article className="info-card"><h3>Our standard</h3><p>Executive presentation. Professional functionality. Customer-data protection.</p></article></div>
    <p style={{marginTop: 35}}><Link className="text-link" href="/contact">Make an enquiry →</Link></p></div></section>
  </>;
}
