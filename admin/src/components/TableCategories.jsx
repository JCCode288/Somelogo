import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function TableCategories({ items }) {
  const [categories, setCategories] = useState([...items]);
  const [deleted, setDeleted] = useState(false);

  async function deleteCategory(id) {
    try {
      let response = await fetch("http://localhost:3001/categories/" + id, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        toast.success("successfully deleted category");
        setDeleted(true);
      }
    } catch (err) {
      toast.error("failed to delete " + err.message, {
        autoClose: 500,
      });
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to fetch categories");
        }
        return response.json();
      })
      .then((items) => {
        setCategories([...items]);
        setDeleted(false);
      })
      .catch((err) => {
        toast.error("failed to delete " + err.message, {
          autoClose: 500,
        });
      });
  }, [deleted]);

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
                    onClick={() => deleteCategory(el.id)}
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
