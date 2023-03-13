import { useState } from "react";
import "../assets/navbar.css";

function NavBar({ setPage }) {
  let [logged, setLogged] = useState(localStorage.logged);

  return (
    <nav className="flex border-2 border-b-black py-1 justify-between">
      <ul className="flex">
        <li
          className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
          onClick={() => setPage("products")}
        >
          Dashboard
        </li>
        <li
          className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
          onClick={() => setPage("categories")}
        >
          Categories
        </li>
      </ul>
      <div>
        {logged ? (
          <button
            className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
            onClick={localStorage.clear()}
          >
            logout
          </button>
        ) : (
          <button
            className="cursor-pointer mx-4 my-2 px-2 py-1 hover:bg-red-600 ease-in-out duration-150 text-lg hover:font-bold hover:text-white rounded hover:underline underline-offset-2 border-red-500 border-2"
            onClick={() => setPage("login")}
          >
            login
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
