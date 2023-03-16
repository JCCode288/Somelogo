import { RouterProvider } from "react-router-dom";
import router from "./routers";

function App() {
  return (
    <div className="App">
      <div className="container flex m-0 overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
