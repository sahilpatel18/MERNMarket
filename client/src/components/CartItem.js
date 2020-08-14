import React from "react";

const CartItem = () => {

  return (
    <div className="container">
      <table className='table'>
        <tbody>
          <tr>
            <th scope='row' className='border-0'>
              <div className='p-2'>
                <img
                  src='https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg'
                  alt=''
                  width='70'
                  className='img-fluid rounded shadow-sm'
                />
                <div className='ml-3 d-inline-block align-middle'>
                  <h5 className='mb-0'>
                    {" "}
                    <a
                      href='#'
                      className='text-dark d-inline-block align-middle'
                    >
                      Timex Unisex Originals
                    </a>
                  </h5>
                  <span className='text-muted font-weight-normal font-italic d-block'>
                    Category: Watches
                  </span>
                </div>
              </div>
            </th>
            <td className='border-0 align-middle'>
              <strong>$79.00</strong>
            </td>
            <td className='border-0 align-middle'>
              <strong>3</strong>
            </td>
            <td className='border-0 align-middle'>
              <a href='#' className='text-dark'>
                Remove
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
