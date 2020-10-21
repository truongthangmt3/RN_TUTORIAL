import {
  GET_USER,
  GET_HOME,
  CALCULATION,
  GET_PRODUCT,
  UPDATE_USER_INFO
} from "./type";

export const getUserInfo = (data) => ({
  type: GET_USER,
  payload: data
});
export const getHome = (data) => ({
  type: GET_HOME,
  payload: data
});
export const calculation = (data) => ({
  type: CALCULATION,
  payload: data
});
export const getProduct = (data) => ({
  type: GET_PRODUCT,
  payload: data,
})
export const updateUserInfo = (data) => ({
  type: UPDATE_USER_INFO,
  payload: data,
})

