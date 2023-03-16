import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FormCategory from "../components/FormCategory";
import { postCategory } from "../store/actions/actionCreator";

export default function NewProduct() {
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submitNewCategory(e) {
    e.preventDefault();
    dispatch(postCategory(newCategory))
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
      <FormCategory
        newCategory={newCategory}
        submitMethods={submitNewCategory}
        setCategory={setNewCategory}
        pageLegend="Add New Category"
      />
    </div>
  );
}
