import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProduct } from "../store/actions/actionCreator";

function TableProducts({ items }) {
  let [products, setProducts] = useState([...items]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function deleteHandler(id) {
    try {
      let message = await dispatch(deleteProduct(id));
      toast.success(message, {
        autoClose: 700,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <table className="table-auto hover:table-fixed focus:table-fixed">
      <thead className="p-2">
        <tr className="border-b-4 border-red-500">
          <th className="text-center px-2">No.</th>
          <th className="text-center px-2">Name</th>
          <th className="text-center px-2">Description</th>
          <th className="text-center px-2">Price</th>
          <th className="text-center px-2">Image</th>
          <th className="text-center px-2">Category</th>
          <th className="text-center px-2">Author</th>
          <th className="text-center px-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((el, index) => {
          delete el.slug;
          return (
            <tr className="relative align-middle" key={el.id}>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50">
                {++index}
              </td>
              <td
                onClick={() => navigate("/edit-product/" + el.id)}
                className=" cursor-pointer p-2 border-b-[1px] border-red-500 border-opacity-50 text-center hover:font-semibold"
              >
                {el.name}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-justify">
                {el.description}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.price}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50">
                <div className="container flex justify-center">
                  <img
                    src={el.mainImg}
                    alt="el.name"
                    className="w-1/2 justify-center rounded-sm"
                  />
                </div>
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.Category?.name}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.Author?.email}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                <button
                  className="flex h-fit w-fit p-2 border-[1px] rounded hover:bg-red-600 hover:text-white duration-150 ease-in mb-2"
                  onClick={() => deleteHandler(el.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableProducts;
