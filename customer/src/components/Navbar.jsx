import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-16 p-2">
      <div className="container flex">
        <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "text-lg underline underline-offset-2 font-bold mx-4";
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
              return "text-lg underline underline-offset-2 font-bold mx-4";
            } else {
              return "text-lg mx-4 hover:underline duration-200 ease-linear";
            }
          }}
          to="/categories"
        >
          Categories
        </NavLink>
      </div>
    </nav>
  );
}
