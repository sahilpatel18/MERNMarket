const orderReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "USER_ORDER":
      return [...state, ...payload];
    default:
      return state;
  }
};

export default orderReducer;
