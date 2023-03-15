import { createBrowserRouter } from "react-router-dom";
import { Layout, ProductSection } from "../components";
import { Category, Landing, Login, Detail } from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
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
        element: <Category />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
