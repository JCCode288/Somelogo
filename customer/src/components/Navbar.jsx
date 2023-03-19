import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLoggedIn } from "../store/actions/actionCreator";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function Navbar() {
  const [username, setUsername] = useState(null);

  const isLogin = useSelector((state) => state.users.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.username) {
      let currentUsername = localStorage.username;
      setUsername(currentUsername);
      dispatch(isLoggedIn(true));
    }
  }, [isLogin]);

  function handleLogout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to logout, are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();

        dispatch(isLoggedIn(false));
        setUsername("");
        Swal.fire("Logged out!", "You are now logged out.", "success");
      }
    });
  }

  return (
    <nav className="flex justify-between p-2 border-b-2 border-red-500 sticky top-0 bg-white bg-opacity-90 z-20 w-screen items-center">
      <object data="../logo.svg" className="h-16 rounded-sm" />
      <div className="container flex ">
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "text-lg underline underline-offset-2 font-bold mx-4 text-red-500";
            } else {
              return "text-lg mx-4 hover:underline duration-200 transition ease-linear";
            }
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "text-lg underline underline-offset-2 font-bold mx-4 text-red-500";
            } else {
              return "text-lg mx-4 hover:underline duration-200 ease-linear";
            }
          }}
          to="/categories"
        >
          Categories
        </NavLink>
      </div>
      {!isLogin ? (
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "text-lg underline underline-offset-2 font-bold mx-4 text-red-500";
            } else {
              return "text-lg mx-4 hover:underline duration-200 ease-linear";
            }
          }}
          to="/login"
        >
          Login
        </NavLink>
      ) : (
        <div className="flex flex-row gap-4 items-center">
          <p className="whitespace-nowrap">Hello, {username}!</p>
          <NavLink
            className="text-lg mx-4 hover:text-red-500"
            onClick={handleLogout}
            to="/"
          >
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
}
