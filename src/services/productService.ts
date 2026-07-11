import api from './api';
import type { Product, ProductRequest, PageResponse } from '../types/productTypes';

export async function listProducts(page = 0, size = 10) {
  const res = await api.get<PageResponse<Product>>('/products', { 
    params: { page, size } });
  return res.data;
}

export async function getProductById(id: number) {
  const res = await api.get<Product>(`/products/${id}`);
  return res.data;
}
export async function createProduct(data: ProductRequest) {
  const res = await api.post<Product>('/products', data);
  return res.data;
}

export async function updateProduct(id: number, data: Partial<ProductRequest>) {
  const res = await api.put<Product>(`/products/${id}`, data);
  return res.data;
}
export async function deleteProduct(id: number) {
  const res = await api.delete<void>(`/products/${id}`);

  return res.data;
}
