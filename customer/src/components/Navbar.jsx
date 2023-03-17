import { NavLink } from "react-router-dom";

export default function Navbar() {
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
    </nav>
  );
}
