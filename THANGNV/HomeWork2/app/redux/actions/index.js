import {
  GET_USER,
  INCREMENT,
  DECREMENT,
  RESULT,
  GET_PRODUCT

} from "./type";

export const getUserInfo = (data) => ({
  type: GET_USER,
  payload: data
});

export const increment = (data) => ({
  type: INCREMENT,
  payload: data
});

export const decrement = (data) => ({
  type: DECREMENT,
  payload: data
});

export const result = (data) => ({
  type: RESULT,
  payload: data
});

export const getProduct = (data) => ({
  type: GET_PRODUCT,
  payload: data
});

export const getProductSuccess = (data) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data
});

export const getProductFailure = (data) => ({
  type: GET_PRODUCT_FAILURE,
  payload: data
});