import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import TableProduct from "../components/TableProduct";
import { fetchProducts } from "../store/actions/actionCreator";

function Dashboard() {
  const { products } = useSelector((state) => {
    return state;
  });

  const productsItem = products.products;
  const loading = products.productsLoading;

  const dispatch = useDispatch();

  async function fetching() {
    try {
      await dispatch(fetchProducts());
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

  return (
    <div className="container p-8 align-middle">
      {loading ? <Spinner /> : <TableProduct items={productsItem} />}
    </div>
  );
}

export default Dashboard;
