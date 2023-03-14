import { createBrowserRouter } from "react-router-dom";
import { Layout, ProductSection } from "../components";
import { Category, Landing } from "../views";

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
        path: "categories",
        element: <Category />,
      },
    ],
  },
]);

export default router;
