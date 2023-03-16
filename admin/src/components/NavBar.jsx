import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../assets/navbar.css";

function NavBar() {
  let { current } = useRef(localStorage.access_token);

  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();

    localStorage.clear();

    toast.success("Logout-ed!");

    navigate("/auth");
  }

  return (
    <nav className="flex border-2 border-b-black py-1 justify-between shadow-sm shadow-black">
      <ul className="flex">
        <ToastContainer />
        <Link to="/">
          <li className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2">
            Dashboard
          </li>
        </Link>
        <Link to="/categories">
          <li className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2">
            Categories
          </li>
        </Link>
        <Link to="new-product">
          <li className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2">
            Add Product
          </li>
        </Link>
        <Link to="new-category">
          <li className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2">
            Add Category
          </li>
        </Link>
        <Link to="register">
          <li className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2">
            Register New Admin
          </li>
        </Link>
      </ul>
      <div>
        {current ? (
          <button
            className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
            onClick={handleLogout}
          >
            logout
          </button>
        ) : (
          <Link to="/auth">
            <button className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2">
              login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
