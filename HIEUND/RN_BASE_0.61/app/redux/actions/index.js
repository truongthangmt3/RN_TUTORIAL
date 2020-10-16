import {
  GET_USER,
  GET_NOTIFICATIONS,
  INCREMENT,
  DECREMENT,
  SQUARE, SQRT, RESET, PLUS, SUBTRACT, MULTIPLY, DIVIDE
} from "./type";

export const getUserInfoAction = () => ({
  type: GET_USER,
  payload: {}
});
export const getNotifications = (data) => ({
  type: GET_NOTIFICATIONS,
  payload: data
});
export const getINCREMENTAL = (data) => ({
  type: INCREMENT,
  payload: data,
});
export const getDECREMENTAL = (data) => ({
  type: DECREMENT,
  payload: data,
});
export const getSQUARE = (data) => ({
  type: SQUARE,
  payload: data,
});
export const getSQRT = (data) => ({
  type: SQRT,
  payload: data,
});
export const getRESET = (data) => ({
  type: RESET,
  payload: data,
});
export const plus = (data) => ({
  type: PLUS,
  payload: data,
});
export const subtract = (data) => ({
  type: SUBTRACT,
  payload: data,
});
export const multiply = (data) => ({
  type: MULTIPLY,
  payload: data,
});
export const divide = (data) => ({
  type: DIVIDE,
  payload: data,
});

