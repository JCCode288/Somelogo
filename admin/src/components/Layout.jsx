import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

export default function Layout() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}
