import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "../components/CategoryButton";
import { Spinner } from "../components";
import { useEffect } from "react";
import { fetchCategories } from "../store/actions/actionCreator";
import { Outlet } from "react-router-dom";

export default function Categories() {
  const dispatch = useDispatch();

  const { categories, categoriesLoading } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      {categoriesLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="container flex flex-wrap gap-8 p-8 justify-evenly">
            {categories?.map((el) => {
              return <CategoryButton category={el} />;
            })}
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}
