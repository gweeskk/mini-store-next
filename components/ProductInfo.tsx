import { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";

export default function ProductInfo({ product}: { product: Product }) {
  return (
    <div className="productInfo">
      <div>
          <h1 className="productTitle">{product.title}</h1>

          <p className="productText">
            <strong>Цена:</strong> {formatPrice(product.price, product.currency)}
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
        </div>
    </div>
  );
}