import type { Product } from "@/types/product";

export default function ProductGallery({ product }: { product: Product }) {
  const productImages = Array.isArray(product.images) ? product.images : [];

  return (
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
  );
};