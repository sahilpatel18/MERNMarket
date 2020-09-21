import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UserOrders = () => {
  const [order, setOrder] = useState([]);
  const userAccount = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`/api/order?userId=${userAccount}`);
      let userOrder = await response.data;
      setOrder(userOrder);
    };
    fetchData();
  }, []);

  console.log(order.length);

  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th className='border-0 bg-light'>
              <div className='p-2 px-3 text-uppercase'>Date</div>
            </th>
            <th className='border-0 bg-light'>
              <div className='py-2 text-uppercase'>items</div>
            </th>
            <th className='border-0 bg-light'>
              <div className='py-2 text-uppercase'>Total</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {order &&
            order
              .map((item) => {
                let realDate = new Date(item.created_at).toLocaleDateString(
                  "en-gb",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                );
                return (
                  <tr>
                    <td>{realDate}</td>

                    <td id='accordion'>
                      <div>
                        <div id='headingOne'>
                          <h5 class='mb-0'>
                            <button
                              class='btn btn-link'
                              data-toggle='collapse'
                              data-target='#collapseOne'
                              aria-expanded='true'
                              aria-controls='collapseOne'
                            >
                              Items
                            </button>
                          </h5>
                        </div>

                        <div
                          id='collapseOne'
                          class='collapse show'
                          aria-labelledby='headingOne'
                          data-parent='#accordion'
                        >
                          <div class='card-body'>
                            <ul class='list-group list-group-flush'>
                              {item.products.map((prod) => {
                                return (
                                  <li className='list-group-item'>
                                    {prod.name} Quantity: {prod.quantity} Price:
                                    ${prod.price}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Total: ${item.total}</td>
                  </tr>
                );
              })
              .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrders;
