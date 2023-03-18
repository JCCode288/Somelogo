import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (localStorage.username) {
      let currentUsername = localStorage.username;
      setUsername(currentUsername);
    }
  }, []);

  return (
    <nav className="flex justify-between py-4 p-4 border-b-2 border-red-500 mb-4 sticky top-0 bg-white bg-opacity-90 z-20 w-screen">
      <div className="container flex">
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
      {!localStorage.access_token ? (
        <div>
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
        </div>
      ) : (
        <div className="flex flex-row gap-4 items-center">
          <p className="whitespace-nowrap">Hello, {username}!</p>
          <NavLink
            className="text-lg mx-4 hover:text-red-500"
            onClick={() => localStorage.clear()}
            to="/"
          >
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
}
