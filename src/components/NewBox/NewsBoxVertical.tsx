import { useNavigate } from "react-router";
import { useCategory } from "../../context/useAppContext";
import { toSlug } from "../../utils/slug";
interface NewsBoxVerticalProps {
  id: string;
  categoryId?: string;
  title: string;
  thumbail: string;
  sapo?: string;
}

const NewsBoxVertical: React.FC<NewsBoxVerticalProps> = ({
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
      className="w-full  flex flex-col items-center gap-5 cursor-pointer border-b border-gray-500 hover:border-black group mb-5"
      onClick={handleClick}
    >
      <img
        src={thumbail}
        alt="new"
        loading="lazy"
        className=" w-full rounded-xl group-hover:scale-105 duration-200"
      />
      <div className="w-full flex flex-col gap-3">
        <p className="line-clamp-3 font-semibold group-hover:text-red-500">
          {title}
        </p>
        <p className="line-clamp-3 ">{sapo ? sapo : ""}</p>
      </div>
    </div>
  );
};

export default NewsBoxVertical;
