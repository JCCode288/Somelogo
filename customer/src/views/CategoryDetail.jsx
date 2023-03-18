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
  }, [categoryId]);

  const { category, categoryLoading } = useSelector(
    (state) => state.categories
  );

  return (
    <>
      {categoryLoading ? <Spinner /> : <CategorySection category={category} />}
    </>
  );
}
