import {
  GETUSER,
  GET_INCREASE,
  GET_DECREASE,
  CACULATION

} from "./type";



export
  const getuser = (data) => ({
    type: GETUSER,
    payload: data
  });
export const getincrease = (data) => ({
  type: GET_INCREASE,
  payload: data
});
export const getdecrease = (data) => ({
  type: GET_DECREASE,
  payload: data
});

export const caculation = (data) => ({
  type: CACULATION,
  payload: data
});
