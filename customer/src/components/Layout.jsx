import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { fetchCategories, fetchProducts } from "../store/actions/actionCreator";
import Footer from "./Footer";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()).catch((err) => console.log(err));
    dispatch(fetchCategories()).catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col h-full w-screen justify-center gap-8">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
