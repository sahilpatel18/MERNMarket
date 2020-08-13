import React, { useState, useEffect } from 'react'


const ProductCard = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

//   return <div>{JSON.stringify(products)}</div>;
return (
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
)
};

export default ProductCard
