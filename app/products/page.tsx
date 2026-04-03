import Link from "next/link";
import { getProducts } from "@/lib/api";
export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main>
    <h1>Товары</h1>
    <div>
  {products.map((product) => (
      <article key={product.id}>
        <img src={product.thumbnail}
        alt={product.title}
        />

        <h2>{product.title}</h2>
        <p>{product.price} {product.currency}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>

      <Link href={`/products/${product.id}`}>Открыть детали</Link>
        </article>
    ))}
    </div>
    
</main>
  );
}