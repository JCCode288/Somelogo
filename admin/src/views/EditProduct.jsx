import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Form from "../components/Form";

export default function EditProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    categoryId: "",
    authorId: "",
    slug: "",
  });

  let { id } = useParams();

  const navigate = useNavigate();

  function fetchProduct() {
    const baseUrl = "http://localhost:3001/products/";
    fetch(baseUrl + id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((item) => {
        setProduct({ ...item });
      })
      .catch((err) => {
        toast.error(err.message, { autoClose: 500 });
      });
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  function submitEditProduct(e) {
    e.preventDefault();
    fetch("http://localhost:3001/products/" + id, {
      method: "put",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Added a New Product", { autoClose: 500 });
        } else {
          throw new Error("failed to add new product");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally((_) => navigate("/"));
  }

  return (
    <div className="container m-8 justify-center flex">
      <ToastContainer />
      <Form
        newProduct={product}
        submitMethods={submitEditProduct}
        setProduct={setProduct}
        pageLegend="Edit Product"
      />
    </div>
  );
}
