import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductsId } from "../ApiService/api";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductsId(id);
      setProductDetails(data);
    };

    fetchProductDetails();
  }, [id]);

  const handleBuynow= ()=>{
    window.confirm("the product is out of stock")
  }

  return (
    <div className="product-details-container">
      <img src={productDetails.image} alt="alternative" className="img-tag" />
      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>
        <p className="product-desc">{productDetails.description}</p>
        <p className="product-price">{productDetails.price}</p>

        <button className="buynow-btn" onClick={handleBuynow}>Buy now</button>
        <Link to="/">
          <button className="goback-btn">Go back home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
