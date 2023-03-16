import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FormCategory from "../components/FormCategory";
import { postCategory } from "../store/actions/actionCreator";

export default function NewCategory() {
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitNewCategory(e) {
    try {
      e.preventDefault();

      let message = await dispatch(postCategory(newCategory));

      toast.success(message, {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });

      navigate("/categories");
    } catch (err) {
      toast.error(err.message, {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
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
