export type ProductSpecs = Record<string, string>;
export type Product = {
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
  specs: ProductSpecs;
};