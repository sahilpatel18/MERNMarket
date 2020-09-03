import actions from "../actions";

const initialState = {
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, addedItems: [...state.addedItems, payload] };
    case "UPDATE_TOTAL":
      return { ...state, total: state.total + payload };
    case "REMOVE_FROM_CART":
      return {
        addedItems:[...state.addedItems.filter(item => item !== payload)]
      }
    default:
      return state;
  }
};

export default cartReducer;
 