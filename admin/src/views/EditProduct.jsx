import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import {
  fetchCategories,
  fetchUsers,
  fetchProduct,
  putProduct,
} from "../store/actions/actionCreator";

export default function EditProduct() {
  let { id } = useParams();
  let { products } = useSelector((state) => state);
  const loading = products.productLoading;

  const [product, setProduct] = useState({
    ...products.product,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id))
      .then(() => dispatch(fetchCategories()))
      .then(() => dispatch(fetchUsers()))
      .catch((err) => {
        toast.error(err.message, { autoClose: 500 });
      });
  }, []);

  function submitEditProduct(e) {
    e.preventDefault();
    dispatch(putProduct(id, product))
      .then((response) => {
        toast.success("Edited!", {
          autoClose: 500,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          autoClose: 500,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
      })
      .finally((_) => navigate("/"));
  }

  return (
    <div className="container m-8 justify-center flex">
      <ToastContainer />
      {loading ? (
        <Spinner />
      ) : (
        <Form
          newProduct={product}
          submitMethods={submitEditProduct}
          setProduct={setProduct}
          pageLegend="Edit Product"
        />
      )}
    </div>
  );
}
