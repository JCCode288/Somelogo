import { createBrowserRouter } from "react-router-dom";
import { Layout, ProductSection } from "../components";
import { Landing } from "../views";

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
    ],
  },
]);

export default router;
