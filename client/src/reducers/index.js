import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cart: cartReducer,
  orders: orderReducer,
});
