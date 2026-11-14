import Link from "next/link";
export default function NotFound() {
  return <section className="content-section"><div className="container"><div className="eyebrow eyebrow-dark">404 / PAGE NOT FOUND</div><h1 style={{fontFamily:"var(--font-display)",fontSize:"54px",fontWeight:500}}>This page isn't here.</h1><p>The page may have moved or the address may be incorrect.</p><Link className="button button-dark" href="/">Return home</Link></div></section>;
}
