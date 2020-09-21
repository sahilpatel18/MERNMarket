import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUserOrder } from "../actions";

const Checkout = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  let total = useSelector((state) => state.cart.total);
  let items = useSelector((state) => state.cart.addedItems);
  let accountUser = useSelector((state) => state.auth.user);
  let totalAmount = (Math.round(total * 100) / 100).toFixed(2);

  let result = (items || []).map((product) => {
    return {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
  });

  const myData = {
    products: result,
    userId: accountUser.id,
    username: accountUser.name,
    total: totalAmount,
  };
  const handleClick = () => {
    dispatch(postUserOrder(myData));
    history.push("/order");
  };

  return (
    <div className='container'>
      <div className='card mb-4 mt-3'>
        <div className='card-body'>
          <h5 className='mb-3'>Checkout</h5>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
              Temporary amount
              <span>${totalAmount}</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center px-0'>
              Shipping
              <span>Free</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
              <div>
                <strong>Total To Pay</strong>
              </div>
              <span>
                <strong>${totalAmount}</strong>
              </span>
            </li>
          </ul>
          <button
            onClick={handleClick}
            className='btn btn-primary btn-block mt-3 waves-effect waves-light'
          >
            <span>Pay</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
