import { useState, useEffect } from "react";
import TableProduct from "../components/TableProduct";

function Products() {
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
      });
  }, []);

  return (
    <div className="container p-8">
      <TableProduct items={products} />
    </div>
  );
}

export default Products;
