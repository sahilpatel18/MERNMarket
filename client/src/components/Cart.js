import React from "react";

const Cart = () => {
  return (
    <div className="container">
<table className="table">
      <thead>
        <tr>
          <th  className='border-0 bg-light'>
            <div className='p-2 px-3 text-uppercase'>Product</div>
          </th>
          <th className='border-0 bg-light'>
            <div className='py-2 text-uppercase'>Price</div>
          </th>
          <th className='border-0 bg-light'>
            <div className='py-2 text-uppercase'>Quantity</div>
          </th>
          <th className='border-0 bg-light'>
            <div className='py-2 text-uppercase'>Remove</div>
          </th>
        </tr>
      </thead>
      </table>
    </div>
  );
};

export default Cart;
