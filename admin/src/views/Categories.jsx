import TableCategories from "../components/TableCategories";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/actionCreator";

function Categories() {
  const { categories } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  async function fetching() {
    try {
      await dispatch(fetchCategories());
    } catch (err) {
      toast.error(err.message, {
        autoClose: 750,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
    }
  }

  useEffect(() => {
    fetching();
  }, []);

  const categoriesItem = categories.categories;
  const loading = categories.categoriesLoading;

  return (
    <div className="container">
      {loading ? <Spinner /> : <TableCategories items={categoriesItem} />}
    </div>
  );
}

export default Categories;
