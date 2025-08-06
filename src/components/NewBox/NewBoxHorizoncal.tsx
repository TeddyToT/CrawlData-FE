import { useNavigate } from "react-router";
import { useCategory } from "../../context/useAppContext";
import { toSlug } from "../../utils/slug";
interface NewsBoxHorizoncalProps {
  id: string;
  categoryId?: string;
  title: string;
  thumbail: string;
  sapo: string;
}

const NewsBoxHorizoncal: React.FC<NewsBoxHorizoncalProps> = ({
  id,
  categoryId,
  title,
  thumbail,
  sapo,
}) => {
  const navigate = useNavigate();
  const categoriesState = useCategory();

  async function handleClick() {
    if (!categoryId) return;
    const category = await categoriesState.getCategoryById(categoryId);
    if (!category) {
      return;
    }
    navigate(`/${category.slug}/${toSlug(title)}`, { state: id });
  }
  return (
    <div
      onClick={handleClick}
      className="w-full h-[200px] md:h-[270px] flex flex-row items-center gap-5 cursor-pointer border-b border-gray-500 hover:border-black p-1 group"
    >
      <img
        src={thumbail}
        alt="new"
        loading="lazy"
        className="w-[30vw] md:w-1/3 rounded-xl group-hover:scale-105 duration-200"
      />
      <div className="justify-center w-2/3 h-4/5 flex flex-col gap-3">
        <p className="line-clamp-3 text-lg font-bold group-hover:text-red-500">
          {title}{" "}
        </p>

        <p className="line-clamp-2 "> {sapo} </p>
      </div>
    </div>
  );
};

export default NewsBoxHorizoncal;
