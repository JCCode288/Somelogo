import TableCategories from "../components/TableCategories";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      try {
        let response = await fetch("http://localhost:3001/categories");

        if (!response.ok) {
          throw new Error("failed to fetch categories");
        }

        let data = await response.json();

        setCategories(data);
      } catch (err) {
        toast.error(err.message, {
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          autoClose: 500,
        });
      }
    }
    fetchCategories();
  }, []);
  return (
    <div className="container">
      <TableCategories items={categories} />
    </div>
  );
}

export default Categories;
