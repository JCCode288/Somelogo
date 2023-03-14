import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import Categories from "../views/Categories.jsx";
import NewProduct from "../views/NewProduct.jsx";
import Dashboard from "../views/Dashboard.jsx";
import Layout from "../components/Layout.jsx";
import Auth from "../components/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) {
        throw redirect("/auth");
      }

      return null;
    },
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "new-product",
        element: <NewProduct />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    loader: () => {
      if (localStorage.access_token) {
        throw redirect("/");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
