import TableCategories from "../components/TableCategories";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";

function Categories() {
  const [loading, categories] = useFetch("categories");

  return (
    <div className="container">
      {loading ? <Spinner /> : <TableCategories items={categories} />}
    </div>
  );
}

export default Categories;
