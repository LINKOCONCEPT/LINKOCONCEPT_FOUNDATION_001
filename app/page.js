import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Layers3, Code2, MoveRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((item) => item.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div className="eyebrow"><span className="eyebrow-line" /> INDEPENDENT DIGITAL STUDIO</div>
<h1>We build companies, not websites.</h1>          <p className="hero-copy">
            We create considered websites, practical digital solutions and
            original products designed to work beautifully and serve real needs.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/showroom">Explore our products <ArrowUpRight size={17} /></Link>
            <Link className="text-link light-link" href="/contact">Discuss a project <MoveRight size={17} /></Link>
          </div>
          <div className="hero-note">
            <span className="hero-note-mark">L</span>
            <span>WEBSITE DEVELOPMENT<br /><b>& DIGITAL SOLUTIONS</b></span>
          </div>
        </div>
        <div className="hero-index">01 <span /> 04</div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div>
            <div className="eyebrow eyebrow-dark">THE LINKOCONCEPT APPROACH</div>
            <h2>Technology should be<br /><em>useful, clear and dependable.</em></h2>
          </div>
          <div className="intro-text">
            <p>LINKOCONCEPT is a digital solutions brand focused on building professional web experiences and developing practical products for businesses and their customers.</p>
            <Link href="/about" className="text-link">Discover our approach <MoveRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container principles-grid">
          <article className="principle-card">
            <span className="principle-icon"><Layers3 /></span>
            <span className="small-label">01 / PRESENTATION</span>
            <h3>Executive by design</h3>
            <p>Clear layouts, thoughtful details and a consistent visual identity.</p>
          </article>
          <article className="principle-card">
            <span className="principle-icon"><Code2 /></span>
            <span className="small-label">02 / FUNCTION</span>
            <h3>Built to work</h3>
            <p>Useful features, careful implementation and testing at every stage.</p>
          </article>
          <article className="principle-card">
            <span className="principle-icon"><ShieldCheck /></span>
            <span className="small-label">03 / TRUST</span>
            <h3>Protection matters</h3>
            <p>Responsible handling of customer information and secure-by-design thinking.</p>
          </article>
        </div>
      </section>

      <section className="section-pad products-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-dark">THE PRODUCT COLLECTION</div>
              <h2>Made to solve.<br /><em>Designed to stand out.</em></h2>
            </div>
            <Link href="/showroom" className="text-link">Visit the showroom <MoveRight size={17} /></Link>
          </div>
          <div className="product-grid">
            {featured.map((product) => <ProductCard key={product.number} product={product} />)}
            <div className="showroom-teaser">
              <span className="teaser-number">001—010</span>
              <h3>A growing collection<br />of digital products.</h3>
              <p>Our showroom is designed to grow as new solutions are developed and validated.</p>
              <Link href="/showroom" className="text-link light-link">Explore the collection <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-band section-pad">
        <div className="container services-band-inner">
          <div>
            <div className="eyebrow">FROM FIRST IDEA TO LIVE WEBSITE</div>
            <h2>Digital services<br /><em>with a practical focus.</em></h2>
          </div>
          <div className="services-band-right">
            <p>From business websites and e-commerce experiences to technical optimisation, we focus on solutions that are clear, maintainable and aligned with real requirements.</p>
            <Link href="/services" className="button button-outline">Explore services <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="closing-cta section-pad">
        <div className="container closing-inner">
          <div className="eyebrow eyebrow-dark">HAVE A PROJECT IN MIND?</div>
          <h2>Let's build something<br /><em>worth standing behind.</em></h2>
          <Link href="/contact" className="button button-dark">Start a conversation <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
