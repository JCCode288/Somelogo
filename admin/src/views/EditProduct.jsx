import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import {
  fetchCategories,
  fetchProduct,
  putProduct,
} from "../store/actions/actionCreator";

export default function EditProduct() {
  let { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let { product, productLoading } = useSelector((state) => state.products);

  const loading = productLoading;

  const [editProduct, setEditProduct] = useState({
    ...product,
  });

  async function handleEditPage() {
    try {
      await dispatch(fetchProduct(id));
      await dispatch(fetchCategories());
    } catch (err) {
      toast.error(err.message, {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  }

  useEffect(() => {
    handleEditPage();
  }, []);

  async function submitEditProduct(e) {
    try {
      e.preventDefault();
      let message = await dispatch(putProduct(id, editProduct));
      toast.success(message, {
        autoClose: 700,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      navigate("/");
    } catch (err) {
      toast.error(err.message, {
        autoClose: 700,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  }

  return (
    <div className="container m-8 justify-center flex">
      <ToastContainer />
      {loading ? (
        <Spinner />
      ) : (
        <Form
          newProduct={editProduct}
          submitMethods={submitEditProduct}
          setProduct={setEditProduct}
          pageLegend="Edit Product"
        />
      )}
    </div>
  );
}
