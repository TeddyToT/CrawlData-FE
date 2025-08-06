
export interface Category {
  id: string;
  name: string;
  url: string;
  slug: string;
}

export interface CategoriesResponse {
  success: boolean;
  categories: Category[];
}

export interface CategoryResponse {
  success: boolean;
  category: Category;
}

export interface Ariticle {
  id: string;
  categoryid: string;
  date: string;
  title: string;
  author: string;
  sapo: string;
  thumbnail: string;
  img: string;
  photocaption: string;
  url: string;
  content: [];
}

export interface AriticleResponse {
  success: boolean;
  article: Ariticle;
}

export interface AriticlesResponse {
  success: boolean;
  articles: Ariticle[];
}
