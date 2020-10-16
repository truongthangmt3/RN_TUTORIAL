import {
  GET_USER,
  GET_INCREASE,
  GET_DECREASE,
  CALCULATION
} from "./type";

export const getUserInfoAction = () => ({
  type: GET_USER,
  payload: {}
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