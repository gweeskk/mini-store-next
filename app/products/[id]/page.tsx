import Link from "next/link";
import { getProductById } from "@/lib/api";
import type { Product } from "@/types/product";
import "./page.css";

const specsLabels: Record<string, string> = {
  display: "Дисплей",
  memory: "Память",
  color: "Цвет",
  storage: "Хранилище",
  connection: "Подключение",
  type: "Тип",
  resolution: "Разрешение",
};

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = await params;

const product = await getProductById(id);

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
          <p className="productText"> {product.stock > 0 ? `В наличии: ${product.stock}`
          : "Нет в наличии"}</p>
  

          <h2 className="specsTitle">Характеристики</h2>
          <ul className="specsList">
            {Object.entries(productSpecs).map(([key, value]) => (
              <li key={key} className="specsItem">
                <strong>{specsLabels[key] || key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}