import React, { createContext, useEffect, useState } from "react";
import type { Category, Ariticle } from "../types/api";
import {
  fetchCategories,
  fetchCategoryBySlug,
  fetchCategoryById,
} from "../services/categoryService";
import {
  fetchAriticles,
  fetchArticlesByCategory,
  fetchArticleById,
} from "../services/articleService";

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  getCategoryBySlug: (slug: string) => Promise<Category>;
  getCategoryById: (id: string) => Promise<Category>;
}

interface ArticlesState {
  articles: Ariticle[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  getByCategory: (categoryId: string) => Promise<Ariticle[]>;
  getArticleById: (id: string) => Promise<Ariticle>;
}

interface AppContextType {
  category: CategoryState;
  articles: ArticlesState;
}

const defaultAppContext: AppContextType = {
  category: {
    categories: [],
    loading: false,
    error: null,
    refetch: () => {},
    getCategoryBySlug: async () => ({
      id: "fake",
      name: "Fake Category",
      slug: "fake-category",
      url: "/fake-category",
    }),
    getCategoryById: async () => ({
      id: "fake",
      name: "Fake Category",
      slug: "fake-category",
      url: "/fake-category",
    }),
  },
  articles: {
    articles: [],
    loading: false,
    error: null,
    refetch: () => {},
    getByCategory: async () => [],
    getArticleById: async () => ({
    id:"",
    categoryid: "",
    date: new Date().toISOString(),
    title: "Sample Article",
    author: "John Doe",
    sapo: "This is a sample sapo",
    thumbnail: "https://cdn2.tuoitre.vn/zoom/480_300/tto/r/2014/09/16/rjraSWmp.png",
    img: "hhttps://cdn2.tuoitre.vn/zoom/480_300/tto/r/2014/09/16/rjraSWmp.png",
    photocaption: "Sample photo caption",
    url: "/sample-article",
    content: [],
    }),
  },
};

export const AppContext = createContext<AppContextType>(defaultAppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<Ariticle[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCategories = () => {
    setLoading(true);
    fetchCategories()
      .then((data) => {
        setCategories(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || "Error loading categories");
      })
      .finally(() => setLoading(false));
  };

  const loadArticles = () => {
    setLoading(true);
    fetchAriticles()
      .then((data) => {
        setArticles(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || "Error loading articles");
      })
      .finally(() => setLoading(false));
  };

  const getByCategory = async (categoryId: string): Promise<Ariticle[]> => {
    try {
      const data = await fetchArticlesByCategory(categoryId);
      return data;
    } catch (err: any) {
      console.error("Error in getByCategory:", err.message);
      return [];
    }
  };

  const getCategoryBySlug = async (slug: string): Promise<Category> => {
    try {
      const data = await fetchCategoryBySlug(slug);
      return data;
    } catch (err: any) {
      console.error("Error in getByCategory:", err.message);
      const slug = "not-found";
      const url = "/not-found";
      return { id: "", name: "not found", slug, url };
    }
  };

  const getCategoryById = async (id: string): Promise<Category> => {
    try {
      const data = await fetchCategoryById(id);
      return data;
    } catch (err: any) {
      console.error("Error in getByCategory:", err.message);
      return {
        id: id,
        name: "not found",
        slug: "not-found",
        url: "/not-found",
      };
    }
  };

  const getArticleById = async (id: string): Promise<Ariticle> => {
    try {
      const data = await fetchArticleById(id);
      return data;
    } catch (err: any) {
      console.error("Error in getByCategory:", err.message);
      return {
        id: id,
        title: "not found",
        date: "not found",
        sapo: "not found",
        categoryid: "not found",
        author: "not found",
        img: "not found",
        photocaption: "not found",
        thumbnail: "not found",
        url: "not found",
        content: [],
      };
    }
  };

  useEffect(() => {
    loadCategories();
    loadArticles();
  }, []);

  return (
    <AppContext.Provider
      value={{
        category: {
          categories,
          loading,
          error,
          refetch: loadCategories,
          getCategoryBySlug,
          getCategoryById,
        },
        articles: {
          articles,
          loading,
          error,
          refetch: loadCategories,
          getByCategory,
          getArticleById,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
