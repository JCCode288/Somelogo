import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import Categories from "../views/Categories.jsx";
import NewProduct from "../views/NewProduct.jsx";
import Dashboard from "../views/Dashboard.jsx";
import Layout from "../components/Layout.jsx";
import Auth from "../components/Auth.jsx";

// Don't forget to add NavGuard to your router m8

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
