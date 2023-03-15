import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { fetchProducts } from "../store/actions/actionCreator";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="flex flex-col h-full w-full justify-center">
      <Navbar />
      <Outlet />
    </div>
  );
}
