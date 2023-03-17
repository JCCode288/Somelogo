import { useNavigate } from "react-router-dom";

export default function CategoryButton({ category }) {
  const navigate = useNavigate();
  return (
    <button
      className="py-2 px-4 border-[1px] flex flex-none w-fit h-fit rounded-3xl border-red-500 hover:text-red-500 duration-100 ease-in hover:scale-105"
      onClick={() => navigate(`/category/${category?.id}`)}
    >
      {category?.name}
    </button>
  );
}
