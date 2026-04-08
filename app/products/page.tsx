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
            <p className="productText">Категория: {product.category}</p>
            <p className="productText">Рейтинг: {product.rating}</p>
            <p className = "productText">Бренд: {product.brand}</p>
            <p className="productText"> {product.stock > 0 ? `В наличии: ${product.stock}"` : "Нет в наличии"}</p>

            <Link href={`/products/${product.id}`} className="productLink">
              Открыть детали
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}