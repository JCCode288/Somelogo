import { createBrowserRouter } from "react-router-dom";
import { Layout, ProductSection } from "../components";
import { Categories, Landing, Login, Detail, CategoryDetail } from "../views";
import Register from "../views/Register";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
        children: [
          {
            path: "",
            element: <ProductSection />,
          },
        ],
      },
      {
        path: "categories",
        element: <Categories />,
        children: [
          {
            path: ":id",
            element: <CategoryDetail />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
