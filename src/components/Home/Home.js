import React, { useState, useEffect } from "react";
import "./Home.css";
import { getAllProducts } from "../../ApiService/api";
import { Link } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      console.log(data, "data");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="prod-grid">
      {products.map((product) => (
        <div className="prod" key={product.id}>
          <img src={product.image} alt="alternate" />
          <h2>{product.title}</h2>
          <p>
            <span className="price">${product.price}</span>
          </p>
          <Link to={`/product/${product.id}`}>
            <button>product details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
