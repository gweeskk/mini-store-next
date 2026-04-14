"use client";


type ProductsErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductsError({
  error,
  reset,
}: ProductsErrorProps) {
  return (
    <main className="productsError">
      <h1>Не удалось загрузить список товаров. Просьба проверить, запущен ли mock API, и попробовать снова.</h1>
      <p>{error.message}</p>

      <button type="button" onClick={() => reset()} className="retryButton">
        Попробовать снова
      </button>
    </main>
  );
}