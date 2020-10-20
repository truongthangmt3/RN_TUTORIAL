import {
  GET_USER,
  INCREMENT,
  DECREMENT,
  RESULT

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