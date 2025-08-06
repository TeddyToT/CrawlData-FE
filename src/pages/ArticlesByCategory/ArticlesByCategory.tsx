import NewsBoxHorizoncal from "../../components/NewBox/NewBoxHorizoncal";
import SideBox from "../../components/SideBox/SideBox";
import { useArticles, useCategory } from "../../context/useAppContext";
import { useState, useEffect } from "react";
import type { Ariticle } from "../../types/api";
import { useLocation, Link, useParams } from "react-router";
const ArticlesByCategory: React.FC = () => {
  const articlesState = useArticles();
  const categoriesState = useCategory();
  const [categoryArticles, setCategoryArticles] = useState<
    Record<string, Ariticle[]>
  >({});
  const [articles, setArticles] = useState<Ariticle[]>([]);

  const { slug } = useParams();
  const location = useLocation();
  const [category, setCategory] = useState(() => {
    return location.state || null;
  });

  useEffect(() => {
    if (!location.state && slug) {
      const fetchCategory = async () => {
        const foundCategory = await categoriesState.getCategoryBySlug(slug);
        if (foundCategory) {
          setCategory(foundCategory);
        }
      };

      fetchCategory();
    }
  }, [slug, categoriesState, location.state]);

  useEffect(() => {
    const loadArticles = async () => {
      const result = await articlesState.getByCategory(category.id);
      setArticles(result);
    };

    if (category?.id) {
      loadArticles();
    }
  }, [articlesState, category?.id]);

  useEffect(() => {
    const loadAll = async () => {
      const articlesMap: Record<string, Ariticle[]> = {};
      for (const category of categoriesState.categories) {
        const articles = await articlesState.getByCategory(category.id);
        articlesMap[category.id] = articles;
      }
      setCategoryArticles(articlesMap);
    };

    if (categoriesState.categories.length > 0) {
      loadAll();
    }
  }, [articlesState, categoriesState.categories]);

  if (articlesState.loading || categoriesState.loading)
    return <p>Đang tải...</p>;
  if (articlesState.error || categoriesState.error)
    return <p>Lỗi: {articlesState.error || categoriesState.error}</p>;

  const filteredCategories = categoriesState.categories.filter(
    (category) => category.slug !== slug
  );
  return (
    <div className="flex gap-10 w-full">
      <div className="flex flex-col w-3/4 gap-14">
        <div>
          <h2 className="font-semibold text-lg">{category?.name}</h2>
          {articles.map((article) => (
            <NewsBoxHorizoncal
              key={article.id}
              id={article.id}
              categoryId={article.categoryid}
              title={article.title}
              thumbail={article.thumbnail}
              sapo={article.sapo}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-1/4 gap-5 h-full">
        <h2 className="font-semibold text-lg">TIN KHÁC</h2>
        <div className="flex flex-col gap-3">
          {filteredCategories.map((category) => (
            <div className="flex flex-col gap-2">
              <SideBox
                key={category.id}
                articles={categoryArticles[category.id] || []}
                name={category.name}
                quantity={3}
              />
              <div className="w-full text-right">
                <Link
                  to={`/${category.slug}`}
                  state={category}
                  className="italic cursor-pointer hover:text-blue-600 hover:underline"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesByCategory;
