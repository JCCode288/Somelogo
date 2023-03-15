import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Form from "../components/Form";
import { postProduct } from "../store/actions/actionCreator";

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    categoryId: "",
    authorId: "",
    slug: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submitNewProduct(e) {
    e.preventDefault();
    dispatch(postProduct(newProduct))
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  return (
    <div className="container m-8 justify-center flex">
      <ToastContainer />
      <Form
        newProduct={newProduct}
        submitMethods={submitNewProduct}
        setProduct={setNewProduct}
        pageLegend="Add New Product"
      />
    </div>
  );
}
