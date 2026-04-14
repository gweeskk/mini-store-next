"use client";
import Link from "next/link";

type ProductDetailsErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductDetailsError({
error,
  reset,
}: ProductDetailsErrorProps) {
  return (
    <main className="productDetailsError">
      <h1>Не удалось загрузить данные товара. Просьба проверить, запущен ли mock API, и попробовать снова.</h1>
      <p>{error.message}</p>

      <button type="button" onClick={() => reset()} className="retryButton">
        Попробовать снова
      </button>

      <Link href="/products" className="backLink">
        ← Вернуться к товарам
      </Link>
    </main>
  );
}