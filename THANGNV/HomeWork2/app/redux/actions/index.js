import {
  GET_USER,
  GET_PRODUCT

} from "./type";

export const getUser = (data) => ({
  type: GET_USER,
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

export const getUserInfo = data => ({
  type: GET_USER_INFO,
  payload: data
});

export const updateUserInfo = data => ({
  type: UPDATE_USER_INFO,
  payload: data
});