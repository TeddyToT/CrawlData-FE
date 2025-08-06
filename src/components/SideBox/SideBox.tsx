import NewsBoxVertical from "../NewBox/NewsBoxVertical";
import type { Ariticle } from "../../types/api";
interface SideBoxProps {
    name: string;
    articles: Ariticle[];
    quantity: number
}


const SideBox:React.FC<SideBoxProps> = ({name, articles, quantity}) => {
    return (
    <div className="flex flex-col w-full gap-5 h-full">
        <h3>{name}</h3>
        <div className="flex flex-col">
            {articles.slice(0, quantity).map((article) => (
            <NewsBoxVertical
                key={article.id}
                id={article.id}
                categoryId={article.categoryid}
                title={article.title}
                thumbail={article.thumbnail}
              />
            ))}
        </div>
        </div>
    );
}

export default SideBox;