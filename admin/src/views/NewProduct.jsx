import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Form from "../components/Form";

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

  function submitNewProduct(e) {
    e.preventDefault();
    fetch("http://localhost:3001/products", {
      method: "post",
      body: JSON.stringify(newProduct),
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
        newProduct={newProduct}
        submitMethods={submitNewProduct}
        setProduct={setNewProduct}
        pageLegend="Add New Product"
      />
    </div>
  );
}
