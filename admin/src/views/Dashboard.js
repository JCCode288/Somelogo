import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TableProduct from "../components/TableProduct";

function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) =>
        toast.error("wrong email/password", {
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          autoClose: 500,
        })
      );
  }, []);

  return (
    <div className="container p-8">
      <TableProduct items={products} />
    </div>
  );
}

export default Dashboard;
