import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Form from "../components/Form";
import { fetchCategories, postProduct } from "../store/actions/actionCreator";

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    categoryId: "",
    authorId: "",
    slug: "",
    Images: [],
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  function submitNewProduct(e) {
    e.preventDefault();

    let images = Object.values(newProduct.Images);

    newProduct.Images = images;

    dispatch(postProduct(newProduct))
      .then((message) => {
        toast.success(message, {
          autoClose: 700,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
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
