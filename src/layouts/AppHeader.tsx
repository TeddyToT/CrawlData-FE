import { Link } from "react-router";
import { useCategory } from "../context/useAppContext";
import { useState } from "react";
const AppHeader: React.FC = () => {
  const { categories, loading, error } = useCategory();
  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  const [showMenu, setShowMenu] = useState(true);
  return (
    <header className="sticky top-0 flex flex-col gap-3 items-center w-full bg-white border-gray-200 z-9000 border-b mb-5">
      <div className="w-full text-center gap-2 px-3 py-3 bg-red-500 ">
        <Link to="/" className="text-3xl font-bold text-white">
          BÁO MỚI
        </Link>
      </div>
      <div className="w-11/12">
        {/* <button className="hover:text-red-700 cursor-pointer" onClick={refetch}>
          Tải lại
        </button> */}
        <div className="md:hidden flex justify-between items-center pb-1">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl font-semibold hover:text-red-500 cursor-pointer"
          >
            {showMenu ? "\u2B9D" : "\u2630"}
          </button>
        </div>

        <ul
          className={`
           gap-3 pb-3 font-semibold
          ${showMenu ? "block md:grid" : "hidden md:grid"} grid grid-cols-2 sm:md:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-11 place-items-center
        `}
        >
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/${category.slug}`} className="hover:text-red-500" rel="noopener noreferrer">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
