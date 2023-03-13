import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Categories from "./views/Categories";
import Products from "./views/Products";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("");

  return (
    <div className="App">
      <NavBar setPage={setPage} />
      <div className="container">
        {page === "login" ? <Login page={page} setPage={setPage} /> : ""}
        {page === "register" ? <Register /> : ""}
        {page === "dashboard" ? <Dashboard /> : ""}
        {page === "categories" ? <Categories /> : ""}
        {page === "products" ? <Products /> : ""}
      </div>
    </div>
  );
}

export default App;
