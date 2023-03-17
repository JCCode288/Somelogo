import { createBrowserRouter } from "react-router-dom";
import { Layout, ProductSection } from "../components";
import { Categories, Landing, Login, Detail, CategoryDetail } from "../views";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "/category/:id",
        element: <CategoryDetail />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
