// services/categoryService.ts
import axios from "axios";
import type { CategoryResponse,CategoriesResponse, Category } from "../types/api";

const API_URL = import.meta.env.VITE_CATEGORY_API_URL;

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await axios.get<CategoriesResponse>(API_URL);
  if (res.data.success) {
    return res.data.categories;
  }
  throw new Error("Failed to fetch categories");
};
export const fetchCategoryBySlug = async (slug: string): Promise<Category> => {
  const res = await axios.get<CategoryResponse>(`${API_URL}slug`, {
    params: { slug },
  });
  if (res.data.success) {
    return res.data.category;
  }
  throw new Error("Failed to fetch category by slug");
};

export const fetchCategoryById = async (id: string): Promise<Category> => {
  const res = await axios.get<CategoryResponse>(`${API_URL}id`, {
    params: { id },
  });
  if (res.data.success) {
    return res.data.category;
  }
  throw new Error("Failed to fetch category by id");
};