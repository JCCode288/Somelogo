import Login from "./views/Login";
import Register from "./views/Register";
import Categories from "./views/Categories";
import Products from "./views/Dashboard";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="App">
      <NavBar setPage={setPage} />
      <div className="container">
        {page === "login" ? <Login page={page} setPage={setPage} /> : ""}
        {page === "register" ? <Register /> : ""}
        {page === "categories" ? <Categories /> : ""}
        {page === "products" ? <Products /> : ""}
      </div>
    </div>
  );
}

export default App;
