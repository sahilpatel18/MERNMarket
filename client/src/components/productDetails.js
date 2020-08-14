import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProductInformation = async () => {
    const response = await fetch(`/api/products/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    setProduct(await response.json());
  };

  useEffect(() => {
    getProductInformation();
  }, []);

  return (
    <main className='mt-5 pt-4'>
      <div className='container dark-grey-text mt-5'>
        <div className='row wow fadeIn'>
          <div className='col-md-6 mb-4'>
            <img
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg'
              className='img-fluid'
              alt=''
            />
          </div>

          <div className='col-md-6 mb-4'>
            <div className='p-4'>
              <div className='mb-3'>
                <a href=''>
                  <span className='badge badge-warning badge-secondary'>
                    Reviews
                  </span>
                </a>
              </div>

              <h1 className=' font-weight-bold'>{product.name}</h1>

              <p className='h3'>
                <span>${product.price}</span>
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dolor suscipit libero eos atque quia ipsa sint voluptatibus!
                Beatae sit assumenda asperiores iure at maxime atque repellendus
                maiores quia sapiente.
              </p>

              <form className='d-flex justify-content-left'>
                <input
                  type='number'
                  value='1'
                  aria-label='Search'
                  className='form-control mr-5 '
                  style={{ width: "90px" }}
                />
         
                  <button
                    className='btn btn-primary btn-md my-0 p'
                    type='submit'
                  >
                    Add to cart
                  </button>
        
              </form>
            </div>
          </div>
        </div>

        <hr />

        <div className='row d-flex justify-content-center wow fadeIn'>
          <div className='col-md-6 text-center'>
            <h4 className='my-4 h4'>Additional information</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates, quibusdam
              officia. Neque quibusdam quas a quis porro? Molestias illo neque
              eum in laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
