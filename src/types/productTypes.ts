export type ProductStatus = 'DISPONIBLE' | 'AGOTADO' | 'PROXIMAMENTE';

export type Product = {
  id: number;
  name: string;
  categoria: string;
  price: number;
  stock: number;
  status: ProductStatus;
};
export type ProductRequest = {
  name: string;
  categoria: string;
  price: number;
  stock: number;
  status: ProductStatus;
};

export type PageResponse<T> = {
  totalElements: number;
  totalPages: number;
  size: number;
  content: T[];
  number: number;
};