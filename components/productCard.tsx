import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";

type ProductCardProps = {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="productCard">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="productImage"
            />

            <h2 className="productCardTitle">{product.title}</h2>
            <p className="productText">
              {product.price} {product.currency}
            </p>
            <p className="productText">Категория: {product.category}</p>
            <p className="productText">Рейтинг: {product.rating}</p>
            <p className="productText"> {product.stock > 0 ? `В наличии: ${product.stock}` : "Нет в наличии"}</p>

            <Link href={`/products/${product.id}`} className="productLink">
              Открыть детали
            </Link>
          </article>
  );
}