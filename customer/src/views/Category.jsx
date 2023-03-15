import { useSelector, useDispatch } from "react-redux";
import CategoryButton from "../components/CategoryButton";
import { useEffect } from "react";
import { fetchCategories } from "../store/actions/actionCreator";
import { Spinner } from "../components";

export default function Category() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories()).catch((err) => console.log(err));
  }, []);
  const { categories, categoriesLoading } = useSelector(
    (state) => state.categories
  );

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
