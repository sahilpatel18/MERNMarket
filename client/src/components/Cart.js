import React from "react";
import { connect } from "mongoose";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  let item = useSelector((state) => state.addedItems);
  let total = useSelector((state) => state.total)
  let totalAmount = (Math.round(total * 100) / 100).toFixed(2);
  let dispatch = useDispatch();
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th className='border-0 bg-light'>
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
        <tbody>
          {item.map((product) => {
            return (
              <tr>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product
                    });
                  }}
                  className='btn btn-outline-danger'
                >
                  Remove
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      Total: ${totalAmount}
    </div>
  );
};

export default Cart;
