import Spinner from "../components/Spinner";
import TableProduct from "../components/TableProduct";
import useFetch from "../hooks/useFetch";

function Dashboard() {
  const [loading, products] = useFetch("/products");

  return (
    <div className="container p-8 align-middle">
      {loading ? <Spinner /> : <TableProduct items={products} />}
    </div>
  );
}

export default Dashboard;
