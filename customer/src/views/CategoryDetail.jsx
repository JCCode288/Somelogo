import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CategorySection, Spinner } from "../components";
import { fetchCategory } from "../store/actions/actionCreator";

export default function CategoryDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryId = useParams().id;

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, []);

  const { category, categoryLoading } = useSelector(
    (state) => state.categories
  );

  console.log(category);

  return (
    <>
      <button
        className="py-2 px-4 border-2 border-red-500 m-4 rounded-3xl hover:bg-red-500 hover:text-white hover:font-bold duration-100 hover:translate-x-[-1rem] active:translate-x-[-1rem] w-fit"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      {categoryLoading ? <Spinner /> : <CategorySection category={category} />}
    </>
  );
}
