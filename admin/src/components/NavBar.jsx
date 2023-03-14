import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css";

function NavBar({ setPage }) {
  let [logged, setLogged] = useState(localStorage.logged);

  return (
    <nav className="flex border-2 border-b-black py-1 justify-between shadow-sm shadow-black">
      <ul className="flex">
        <Link to="/">
          <li
            className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
            onClick={() => setPage("products")}
          >
            Dashboard
          </li>
        </Link>
        <Link to="/categories">
          <li
            className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
            onClick={() => setPage("categories")}
          >
            Categories
          </li>
        </Link>
        <Link to="new-product">
          <li
            className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
            onClick={() => setPage("new-product")}
          >
            Add Product
          </li>
        </Link>
      </ul>
      <div>
        {logged ? (
          <button
            className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
            onClick={() => localStorage.clear()}
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
