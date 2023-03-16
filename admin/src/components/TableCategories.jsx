import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteCategory,
  fetchCategories,
} from "../store/actions/actionCreator";

function TableCategories({ items }) {
  const [categories, setCategories] = useState([...items]);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      let message = await dispatch(deleteCategory(id));

      toast.success(message, {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    } catch (err) {
      toast.error(err.message, {
        autoClose: 500,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  };

  return (
    <table className="table-auto grid hover:table-fixed focus:table-fixed relative ">
      <thead className="p-2 border-b-4 border-red-500 flex">
        <tr className=" text-center container flex justify-between">
          <div className="container flex-row flex">
            <th className="text-center px-2 columns-4">No.</th>
            <th className="text-center px-2 columns-2">Name</th>
          </div>
          <div className="container flex justify-end ">
            <th className="text-center px-2 mr-40">Actions</th>
          </div>
        </tr>
      </thead>
      <tbody>
        {categories.map((el, index) => {
          return (
            <tr className="relative align-middle" key={el.id}>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 w-32 left-auto right-auto flex justify-center">
                {++index}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center columns-4">
                {el.name}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center columns-2">
                <div className="container">
                  <button
                    className="mx-2 cursor-pointer hover:text-red-500 hover:underline underline-offset-4 hover:font-bold ease-linear duration-150"
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableCategories;
