import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "../components/CategoryButton";
import { Spinner } from "../components";
import { useEffect } from "react";
import { fetchCategories } from "../store/actions/actionCreator";

export default function Categories() {
  const dispatch = useDispatch();

  const { categories, categoriesLoading } = useSelector(
    (state) => state.categories
  );
  console.log(categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      {categoriesLoading ? (
        <Spinner />
      ) : (
        <div className="container flex flex-wrap gap-8 p-8 justify-evenly">
          {categories?.map((el) => {
            return <CategoryButton category={el} />;
          })}
        </div>
      )}
    </>
  );
}
