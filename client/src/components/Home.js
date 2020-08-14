import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className='row justify-content-center'>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Home;
