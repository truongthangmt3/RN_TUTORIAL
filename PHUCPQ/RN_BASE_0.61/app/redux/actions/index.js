import {
  GET_USER,
  GET_INCREASE,
  GET_REDUCTION,
  GET_MULTIPLY,
  GET_SHARE
} from "./type";

export const getUserInfo = (data) => ({
  type: GET_USER,
  payload: data
});
export const increase = (data) => ({
  type: GET_INCREASE,
  payload: data
});
export const reduction = (data) => ({
  type: GET_REDUCTION,
  payload: data
});
export const multiply = (data) => ({
  type: GET_MULTIPLY,
  payload: data
});
export const share = (data) => ({
  type: GET_SHARE,
  payload: data
})
