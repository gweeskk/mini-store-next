import ProductCard from "@/components/productCard";
import { getProducts } from "@/lib/api";
import "./page.css";

export default async function ProductsPage() {
  const products = await getProducts();


  return (
    <main className="productsPage">
      <h1 className="productsTitle">Товары</h1>

      <div className="productsGrid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}