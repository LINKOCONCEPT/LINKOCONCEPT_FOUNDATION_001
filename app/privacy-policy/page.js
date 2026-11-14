import Link from "next/link";
export const metadata = { title: "Privacy policy" };
export default function Page() {
  return <>
    <section className="inner-hero"><div className="container"><div className="eyebrow">LINKOCONCEPT / PRIVACY-POLICY</div><h1>Privacy policy</h1><p>Privacy information for visitors to the LINKOCONCEPT website.</p></div></section>
    <section className="content-section"><div className="container"><p>This page is a publication placeholder, not a final legal policy. Before launch, LINKOCONCEPT must document the actual data collected, purposes, lawful basis, processors, retention periods, user rights and contact details that apply to the live website.</p><div className="content-grid"><article className="info-card"><h3>Before publication</h3><p>Insert the verified legal business identity and appropriate contact details. Confirm analytics, cookies, hosting logs and any enquiry-form data flows.</p></article>
<article className="info-card"><h3>Data minimisation</h3><p>Collect only information necessary for a stated purpose and protect it with appropriate access controls.</p></article></div>
    <p style={{marginTop: 35}}><Link className="text-link" href="/contact">Make an enquiry →</Link></p></div></section>
  </>;
}
