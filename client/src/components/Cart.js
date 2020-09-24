import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../actions/index";

const Cart = () => {
  let item = useSelector((state) => state.cart.addedItems);
  let total = useSelector((state) => state.cart.total);
  let totalAmount = (Math.round(total * 100) / 100).toFixed(2);
  let dispatch = useDispatch();

  return (
    <div className='container'>
      <table className='table table-striped '>
        <thead>
          <tr>
            <th scope="col" className='border-0 bg-light p-2 px-3 text-uppercase'>
              Product
            </th>
            <th scope="col" className='border-0 bg-light py-2 text-uppercase'>Price</th>
            <th scope="col" className='border-0 bg-light py-2 text-uppercase'>Quantity</th>
            <th scope="col" className='border-0 bg-light py-2 text-uppercase'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {item &&
            item.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(removeFromCart(product));
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
      <strong>Total: ${totalAmount}</strong>
      {totalAmount > 0 ? (
        <span>
          <Link to='/paynow'>
            <button className='btn btn-primary ml-3 float-right'>Next</button>
          </Link>
        </span>
      ) : (
        <span>
          <Link to='/paynow'>
            <button
              className='btn disabled btn-primary ml-3 float-right'
              disabled
            >
              Next
            </button>
          </Link>
        </span>
      )}
    </div>
  );
};

export default Cart;
