
import {
  GET_TRU, GET_HOME, CALCULATION, GET_PRODUCT, GET_USER_SUCCESS, GET_USER_FAIL, GET_USER_INFO, GET_USERINFO_SUCCESS, GET_USERINFO_FAIL,
} from "./type";

export const getTruInfoAction = (data) => ({
  type: GET_TRU,
  payload: data,
});
export const getHomeInfoAction = (data) => ({
  type: GET_HOME,
  payload: data,
});
export const getCalculationInfoAction = (data) => ({
  type: CALCULATION,
  payload: data,
});
export const getProduct = (data) => ({
  type: GET_PRODUCT,
  payload: data,
});
export const getProductSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});
export const getProductFailure = (data) => ({
  type: GET_USER_FAIL,
  payload: data,
});
export const getUserInfo = (data) => ({
  type: GET_USER_INFO,
  payload: data,
});
export const getUserInfoSuccess = (data) => ({
  type: GET_USERINFO_SUCCESS,
  payload: data,
});
export const getUserInfoFailure = (data) => ({
  type: GET_USERINFO_FAIL,
  payload: data,
});






