"use client";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const apiCall = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts((prev)=>data.products)
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <h1>Fetch Data with API in client component</h1>
      {
        products.map((item)=>(
          <h3 key={item.id}>{item.title}</h3>
        ))
      }
    </div>
  );
};

export default ProductList;
