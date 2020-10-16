import {
  GET_USER,
  GET_NOTIFICATIONS,
  INCREMENT,
  DECREMENT,
  SQUARE, SQRT, RESET
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
})

