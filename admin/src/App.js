import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Categories from "./views/Categories";
import Products from "./views/Products";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-7xl">something here</h1>
        <Login />
        <Register />
        <Dashboard />
        <Categories />
        <Products />
      </div>
    </div>
  );
}

export default App;
