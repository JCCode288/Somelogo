import Spinner from "../components/Spinner";
import TableProduct from "../components/TableProduct";
import useFetch from "../hooks/useFetch";

function Dashboard() {
  // useEffect(() => {
  //   fetch("http://localhost:3001/products")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((err) =>
  //       toast.error("wrong email/password", {
  //         pauseOnFocusLoss: false,
  //         pauseOnHover: false,
  //         autoClose: 500,
  //       })
  //     );
  // }, []);

  const [loading, data] = useFetch("products");
  const products = data;

  return (
    <div className="container p-8 align-middle">
      {loading ? <Spinner /> : <TableProduct items={products} />}
    </div>
  );
}

export default Dashboard;
