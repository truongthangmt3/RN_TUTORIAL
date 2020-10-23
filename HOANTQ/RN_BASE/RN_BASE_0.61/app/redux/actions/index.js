import {
  GET_USER,GET_HOME,INCREMENT,DECREMENT,GET_USER_INFO
} from "./type";

export const getUserInfoAction = () => ({
  type: GET_USER,
  payload: {}
});
export const getIncress = () => ({
  type:INCREMENT,
  payload: {}
});
export const getReduction = () => ({
  type: DECREMENT,
  payload: {}
});
export const getUserInfo = () => ({
  type: GET_USER_INFO,
  payload: {}
});
