import Link from "next/link";
import "./page.css";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  thumbnail: string;
  images: string[];
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  specs: Record<string, string>;
};

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  let product: Product | null = null;
  let error: string | null = null;

  try {
    const response = await fetch(`http://localhost:3000/products/${params.id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    product = await response.json();
  } catch (err) {
    error = err instanceof Error ? err.message : "Неизвестная ошибка";
  }

  if (error) {
    return (
      <main className="productDetailsPage">
        <p>Error: {error}</p>
        <Link href="/products" className="backLink">
          ← Вернуться к товарам
        </Link>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="productDetailsPage">
        <p>Продукт не найден</p>
        <Link href="/products" className="backLink">
          ← Вернуться к товарам
        </Link>
      </main>
    );
  }

  const productImages = Array.isArray(product.images) ? product.images : [];
  const productSpecs =
    product.specs && typeof product.specs === "object" ? product.specs : {};

  return (
    <main className="productDetailsPage">
      <Link href="/products" className="backLink">
        ← Вернуться к товарам
      </Link>

      <section className="productDetailsCard">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="productMainImage"
          />

          <div className="productGallery">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className="productGalleryImage"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="productTitle">{product.title}</h1>

          <p className="productText">
            <strong>Цена:</strong> {product.price} {product.currency}
          </p>
          <p className="productText">
            <strong>Описание:</strong> {product.description}
          </p>
          <p className="productText">
            <strong>Категория:</strong> {product.category}
          </p>
          <p className="productText">
            <strong>Бренд:</strong> {product.brand}
          </p>
          <p className="productText">
            <strong>Артикул:</strong> {product.sku}
          </p>
          <p className="productText">
            <strong>Рейтинг:</strong> {product.rating}
          </p>
          <p className="productText">
            <strong>Наличие:</strong> {product.stock}
          </p>

          <h2 className="specsTitle">Характеристики</h2>
          <ul className="specsList">
            {Object.entries(productSpecs).map(([key, value]) => (
              <li key={key} className="specsItem">
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}