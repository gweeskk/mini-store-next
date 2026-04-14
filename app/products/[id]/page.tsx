import Link from "next/link";
import { getProductById } from "@/lib/api";
import ProductSpecs from "@/components/ProductSpecs";
import ProductGallery  from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import "./page.css";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);
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

          <ProductGallery product={product} />
        </div>

        <div>
          <ProductInfo product={product} />
          <div className="specsBlock">
            <ProductSpecs specs={productSpecs} />
          </div>
        </div>
      </section>

    </main>
    );
}

