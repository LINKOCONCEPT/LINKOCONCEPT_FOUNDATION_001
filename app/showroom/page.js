import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
export const metadata = { title: "Product Showroom" };
export default function ShowroomPage() {
  return <>
    <section className="inner-hero"><div className="container"><div className="eyebrow">LINKOCONCEPT / SHOWROOM</div><h1>Our product showroom</h1><p>A growing collection of practical digital products. Ten product positions are planned into this first showroom structure.</p></div></section>
    <section className="content-section"><div className="container">
      <div className="status-note">Product availability is stated honestly. Reserved positions are not completed products and are not offered for sale.</div>
      <div className="showroom-grid">{products.map((product) => <ProductCard key={product.number} product={product} />)}</div>
    </div></section>
  </>;
}
