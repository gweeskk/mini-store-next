import Link from "next/link";
import { getProducts } from "@/lib/api";
import "./page.css";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="productsPage">
      <h1 className="productsTitle">Товары</h1>

      <div className="productsGrid">
        {products.map((product) => (
          <article key={product.id} className="productCard">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="productImage"
            />

            <h2 className="productCardTitle">{product.title}</h2>
            <p className="productText">
              {product.price} {product.currency}
            </p>
            <p className="productText">Category: {product.category}</p>
            <p className="productText">Rating: {product.rating}</p>
            <p className="productText">Stock: {product.stock}</p>

            <Link href={`/products/${product.id}`} className="productLink">
              Открыть детали
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}