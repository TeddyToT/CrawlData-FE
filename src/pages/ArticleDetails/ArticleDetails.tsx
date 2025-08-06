import SideBox from "../../components/SideBox/SideBox";
import { useArticles, useCategory } from "../../context/useAppContext";
import { useState, useEffect  } from "react";
import { useLocation, Link } from "react-router";
import type { Ariticle } from "../../types/api";
import { toVNTime } from "../../utils/dateTimeVN";
// import { shuffleArray } from "../../utils/shuffleArray";
import { UserOutlined } from "@ant-design/icons";
const ArticleDetails: React.FC = () => {
  const articlesState = useArticles();
  const categoriesState = useCategory();
  const articleState = useArticles();
const [article, setArticle] = useState<Ariticle | null>(null);
  const [categoryArticles, setCategoryArticles] = useState<
    Record<string, Ariticle[]>
  >({});

     const location = useLocation();
     const id = location.state;

    useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const foundArticle = await articleState.getArticleById(id);
        if (foundArticle) {
          setArticle(foundArticle);
        }
      };

      fetchArticle();
    }
  }, [articleState, id]);

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


const shuffledCategories = [...categoriesState.categories].sort(() => Math.random() - 0.5);
return (
    <div className="flex gap-10 md:gap-28 w-full">
      <div className="flex flex-col w-3/4 gap-14">
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center mb-5">
                <div className="flex justify-center items-center gap-2">
                <UserOutlined style={{ fontSize: '30px', color: '#08c' }}/>
                <p className="font-semibold">{article?.author}</p>
                </div>

                <p className="text-right italic">{article?.date ? toVNTime(article.date) : ""}</p>

            </div>
          <h1 className="md:text-3xl text-2xl font-bold text-justify">{article?.title}</h1>
          <div className="flex flex-col gap-2 items-center my-5">
            <img loading="lazy" src={article?.img} className="w-[55vw] md:w-[42vw]"/>
            <p className="text-justify md:text-center text-gray-600">{article?.photocaption}</p>
          </div>
          <div className="flex flex-col text-lg gap-3 text-justify">
            {article?.content.map((text)=>(
                <p>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4 gap-5 h-full">
        <h2 className="font-semibold text-lg">TIN KHÁC</h2>
        <div className="flex flex-col gap-3">
          {shuffledCategories.slice(0,5).map((category) => (
            <div className="flex flex-col gap-2">
              <SideBox
                key={category.id}
                articles={categoryArticles[category.id] || []}
                name={category.name}
                quantity={1}
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

export default ArticleDetails;
