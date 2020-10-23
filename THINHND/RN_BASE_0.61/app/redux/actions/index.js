import {
  GET_USER,
  GET_INCREASE,
  GET_DECREASE,
  CALCULATION,
  GET_HOME,
  GET_HOME_SUCCESS,
  GET_HOME_FAIL,
  UPDATE_USER,
  GET_USER_INFO
} from "./type";

export const getUserInfoAction = data => ({
  type: GET_USER_INFO,
  payload: data
});
export const getUserInfo = data => ({
  type: GET_USER_INFO,
  payload: data
});

export const getIncrease = () => ({
  type: GET_INCREASE,
  payload: {}
});
export const getDecrease = () => ({
  type: GET_DECREASE,
  payload: {}
});
export const calculation = data => ({
  type: CALCULATION,
  payload: data
});
export const getHome = () => ({
  type: GET_HOME,
  payload: {}
});
export const getHomeSucces = () => ({
  type: GET_HOME_SUCCESS,
  payload: {}
});
export const getHomeFail = () => ({
  type: GET_HOME_FAIL,
  payload: {}
});


