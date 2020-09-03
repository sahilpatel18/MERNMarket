const addToCartNow = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const addToCart = (product) => (dispatch) => {
  const productTotal = product.quantity * product.price;
  dispatch(updateTotal(productTotal));
  dispatch(addToCart(product));
};

const removeFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

const updateTotal = (total) => {
  return {
    type: "UPDATE_TOTAL",
    payload: total,
  };
};


const editFromCart = (product) => {
  return {
    type: "EDIT_FROM_CART",
    payload: product,
  };
};


