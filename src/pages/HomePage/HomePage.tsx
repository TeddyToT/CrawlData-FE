import NewsBoxHorizoncal from "../../components/NewBox/NewBoxHorizoncal";
import SideBox from "../../components/SideBox/SideBox";
import { useArticles, useCategory } from "../../context/useAppContext";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Ariticle } from "../../types/api";
const HomePage: React.FC = () => {
  const articlesState = useArticles();
  const categoriesState = useCategory();
  // if (loading) return <p>Đang tải...</p>;
  // if (error) return <p>Lỗi: {error}</p>;
  const [categoryArticles, setCategoryArticles] = useState<
    Record<string, Ariticle[]>
  >({});


useEffect(() => {
  const loadAll = async () => {
    const fetches = categoriesState.categories.map(async (category) => {
      const articles = await articlesState.getByCategory(category.id);
      return { categoryId: category.id, articles };
    });

    const results = await Promise.all(fetches);

    const articlesMap: Record<string, Ariticle[]> = {};
    results.forEach(({ categoryId, articles }) => {
      articlesMap[categoryId] = articles;
    });

    setCategoryArticles(articlesMap);
  };

  if (categoriesState.categories.length > 0) {
    loadAll();
  }
}, [articlesState, categoriesState.categories]);

  return (
    <div className="flex gap-10 w-full">
      <div className="flex flex-col w-3/4 gap-14">
        <div className="border-b-2">
          <h2 className="font-semibold text-lg">TIN MỚI NHẤT</h2>
          <NewsBoxHorizoncal
            id={articlesState.articles[0]?.id}
            categoryId={articlesState.articles[0]?.categoryid}
            title={articlesState.articles[0]?.title}
            thumbail={articlesState.articles[0]?.thumbnail}
            sapo={articlesState.articles[0]?.sapo}
          />
        </div>
        <div>
          <h2 className="font-semibold text-lg">BẢN TIN GẦN ĐÂY</h2>
          {articlesState.articles.slice(1).map((article) => (
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
          {categoriesState.categories.map((category) => (
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

export default HomePage;
