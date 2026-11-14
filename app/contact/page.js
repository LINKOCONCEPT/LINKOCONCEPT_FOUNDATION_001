import Link from "next/link";
export const metadata = { title: "Start a conversation" };
export default function Page() {
  return <>
    <section className="inner-hero"><div className="container"><div className="eyebrow">LINKOCONCEPT / CONTACT</div><h1>Start a conversation</h1><p>Tell us what you are planning. We will review the requirements and respond with a practical next step.</p></div></section>
    <section className="content-section"><div className="container"><p>For project and product enquiries, contact LINKOCONCEPT using the official email below. A secure enquiry form can be added after its server-side handling and privacy requirements are configured.</p><div className="content-grid"><article className="info-card"><h3>Email</h3><p>linkoconcept@gmail.com</p></article>
<article className="info-card"><h3>Project enquiries</h3><p>Please include a short description of the project, the outcome you need and any relevant deadline.</p></article></div>
    <p style={{marginTop: 35}}><Link className="text-link" href="/contact">Make an enquiry →</Link></p></div></section>
  </>;
}
