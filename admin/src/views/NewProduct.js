import { useState } from "react";
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
          toast.success("Added a New Product");
        } else {
          throw new Error("failed to add new product");
        }
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
        submitNewProduct={submitNewProduct}
        setNewProduct={setNewProduct}
      />
    </div>
  );
}
