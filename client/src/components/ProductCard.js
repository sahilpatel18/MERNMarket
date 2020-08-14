import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product: { _id: id, name, price, imageURL } }) => {
  return (
    <div className='py-5'>
      <div className='card text-center' style={{ width: "18rem" }}>
        <div className='card-block'>
          <img className='card-img-top' src={imageURL} alt='Card image cap' />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>Price: {price}</p>
            <Link to={`/products/${id}`} className='btn btn-primary'>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
