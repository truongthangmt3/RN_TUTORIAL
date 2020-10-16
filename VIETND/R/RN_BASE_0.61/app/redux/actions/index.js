
import {
  GET_TRU, GET_HOME
} from "./type";

export const getTruInfoAction = (data) => ({
  type: GET_TRU,
  payload: data,
});
export const getHomeInfoAction = (data) => ({
  type: GET_HOME,
  payload: data,
});



