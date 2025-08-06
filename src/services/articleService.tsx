// services/categoryService.ts
import axios from "axios";
import type { Ariticle, AriticleResponse, AriticlesResponse} from "../types/api";

const ARTICLES_URL = import.meta.env.VITE_ARTICLE_API_URL;

export const fetchAriticles = async (): Promise<Ariticle[]> => {
  const res = await axios.get<AriticlesResponse>(ARTICLES_URL);
  if (res.data.success) {
    return res.data.articles;
  }
  throw new Error("Failed to fetch articles");
};

export const fetchArticlesByCategory = async (categoryId: string): Promise<Ariticle[]> => {
  const res = await axios.get<AriticlesResponse>(`${ARTICLES_URL}category`, {
    params: { categoryId },
  });
  if (res.data.success) {
    return res.data.articles;
  }
  throw new Error("Failed to fetch articles by category");
};

export const fetchArticleById = async (id: string): Promise<Ariticle> => {
  const res = await axios.get<AriticleResponse>(`${ARTICLES_URL}id`, {
    params: { id },
  });
  if (res.data.success) {
    return res.data.article;
  }
  throw new Error("Failed to fetch article by id");
};