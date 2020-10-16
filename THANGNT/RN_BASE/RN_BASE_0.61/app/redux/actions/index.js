import { GET_USER, GET_HOME, CALCULATION } from './type';

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
