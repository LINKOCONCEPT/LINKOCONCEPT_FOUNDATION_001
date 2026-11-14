import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-visual">
        <span className="product-number">PRODUCT {product.number}</span>
        <div className="product-monogram">{product.monogram}</div>
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-card-body">
        <div className="product-card-top"><span>{product.status}</span><span>{product.type}</span></div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link href={product.href} className="text-link">Discover product <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
