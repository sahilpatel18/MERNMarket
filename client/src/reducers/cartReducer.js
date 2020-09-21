import {
  TERMINATE_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  UPDATE_TOTAL,
} from "../actions/types";

const initialState = {
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_FROM_CART:
      return {
        addedItems: [...state.addedItems.filter((item) => item !== payload)],
        total: state.total - payload.price * payload.quantity,
      };
    case TERMINATE_CART:
      return {
        ...state,
        addedItems: [],
        total: 0,
      };
    case ADD_TO_CART:
      let doesExist = state.addedItems.find((item) => item._id === payload._id);
      if (doesExist !== undefined) {
        doesExist.quantity = +doesExist.quantity + +payload.quantity;
        state.addedItems.splice(
          state.addedItems.indexOf(doesExist),
          1,
          doesExist
        );
        return { ...state, addedItems: [...state.addedItems] };
      } else {
        return {
          ...state,
          addedItems: [...state.addedItems, payload],
        };
      }
    case UPDATE_TOTAL:
      return { ...state, total: state.total + payload };
    default:
      return state;
  }
};

export default cartReducer;
