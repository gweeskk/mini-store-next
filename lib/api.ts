import { Product } from "@/types/product";
const BASE_URL = "http://localhost:3000";

export async function getProducts(): Promise<Product[]> {  
  const response = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });
  if(!response.ok) {
    throw new Error("Не удалось загрузить список товаров");
  }
  return response.json();
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });
  if(!response.ok) {
    throw new Error("Не удалось загрузить детали товара");
  }
  return response.json();
}

