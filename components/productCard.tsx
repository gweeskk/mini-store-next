"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";

type ProductCardProps = {
  id: number
}
export default function ProductCard({ id }: ProductCardProps) {
  const [product, setProduct] = useState<Product | null > (null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState ("")

useEffect(() => {
  async function loadProduct() {
    try {
        setLoading(true);
        setError("");
      const response = await fetch (`http://localhost:3000/products/${id}`);
      if (!response.ok) {
        throw new Error ("Не удалось загрузить товар");
      }
      const data = await response.json();
      setProduct(data);
    } 
    catch (err) {
      setError("Не удалось загрузить товар");
      setProduct(null);
    }
    finally { 
        setLoading(false);
    }
  }
    loadProduct();
  }, [id]);

    if (loading) {
    return <article className="productCard">Загрузка...</article>;
  }
    if (error || !product) {
    return <article className="productCard">{error || "Ошибка"}</article>;
  }


return (
    <article className="productCard">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="productImage"
      />

      <h2 className="productCardTitle">{product.title}</h2>

      <p className="productPrice">
        {formatPrice(product.price, product.currency)}
      </p>
      <p className="productText">Категория: {product.category}</p>
      <p className="productText">Рейтинг: {product.rating}</p>
      <p className="productText">
        {product.stock > 0 ? `В наличии: ${product.stock}` : "Нет в наличии"}
      </p>

      <Link href={`/products/${product.id}`} className="productLink">
        Открыть детали
      </Link>
    </article>
  );
}