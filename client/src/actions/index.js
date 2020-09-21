import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_TOTAL,
  EDIT_FROM_CART,
  GET_ERRORS,
  SET_CURRENT_USER,
  TERMINATE_CART,
  USER_ORDER,
} from "./types";


export const addToCartNow = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const getUserOrders = (data) => (dispatch) => {
  axios
    .get("/api/order", {
      params: { userId: data },
    })
    .then((res) => {
      let orderInfo = res.data;
      dispatch({
        type: USER_ORDER,
        payload: orderInfo,
      });
    });
};

export const postUserOrder = (userData) => (dispatch) => {
  axios.post("/api/order", userData);
  dispatch(getUserOrders(userData.userId));
};

export const updateTotal = (total) => {
  return {
    type: UPDATE_TOTAL,
    payload: total,
  };
};

const editFromCart = (product) => {
  return {
    type: EDIT_FROM_CART,
    payload: product,
  };
};

export const registerUser = (userData) => (dispatch) => {
  axios.post("/api/register", userData).catch((err) =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  );
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

const terminateCart = (cart) => {
  return {
    type: TERMINATE_CART,
    payload: cart,
  };
};

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/login", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);

      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      dispatch(terminateCart([]));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  dispatch(terminateCart([]));
};
