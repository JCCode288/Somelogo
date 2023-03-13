import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Categories from "./views/Categories";
import Products from "./views/Products";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("");

  return (
    <div className="App">
      <nav className="flex">
        <ul className="flex">
          <li
            className="cursor-pointer mx-2"
            onClick={() => setPage("dashboard")}
          >
            dashboard
          </li>
          <li
            className="cursor-pointer mx-2"
            onClick={() => setPage("products")}
          >
            products
          </li>
          <li
            className="cursor-pointer mx-2"
            onClick={() => setPage("categories")}
          >
            categories
          </li>
          <li className="cursor-pointer mx-2" onClick={() => setPage("login")}>
            login
          </li>
          <li className="cursor-pointer mx-2" onClick={localStorage.clear()}>
            logout
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1 className="text-7xl">something here</h1>
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
