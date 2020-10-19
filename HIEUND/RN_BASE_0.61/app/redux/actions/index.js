import {
  GET_USER,
  GET_NOTIFICATIONS,
  INCREMENT,
  DECREMENT,
  SQUARE,
  SQRT,
  RESET,
  GET_PRODUCT,
  CALCULATION
} from "./type";

export const getUserInfoAction = () => ({
  type: GET_USER,
  payload: {}
});
export const getNotifications = data => ({
  type: GET_NOTIFICATIONS,
  payload: data
});
export const getINCREMENTAL = data => ({
  type: INCREMENT,
  payload: data
});
export const getDECREMENTAL = data => ({
  type: DECREMENT,
  payload: data
});
export const getSQUARE = data => ({
  type: SQUARE,
  payload: data
});
export const getSQRT = data => ({
  type: SQRT,
  payload: data
});
export const getRESET = data => ({
  type: RESET,
  payload: data
});
export const calculation = data => ({
  type: CALCULATION,
  payload: data
});
export const getProduct = data => ({
  type: GET_PRODUCT,
  payload: data
});
// export const GET_PRODUCT_SUCCESS = data => ({
//   type: GET_PRODUCT_SUCCESS,
//   payload: data
// });
// export const GET_PRODUCT_FAIL = data => ({
//   type: GET_PRODUCT_FAIL,
//   payload: data
// })
