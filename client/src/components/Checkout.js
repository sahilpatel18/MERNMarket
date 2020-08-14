import React from "react";

const Checkout = () => {
  return (
    <div className='container'>
      <div className='card mb-4'>
        <div className='card-body'>
          <h5 className='mb-3'>The total amount of</h5>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
              Temporary amount
              <span>$53.98</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center px-0'>
              Shipping
              <span>Gratis</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p className='mb-0'>(including VAT)</p>
                </strong>
              </div>
              <span>
                <strong>$53.98</strong>
              </span>
            </li>
          </ul>

          <button
            type='button'
            className='btn btn-primary btn-block waves-effect waves-light'
          >
            go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
