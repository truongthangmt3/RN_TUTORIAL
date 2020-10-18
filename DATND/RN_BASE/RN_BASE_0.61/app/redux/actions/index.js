import {
  GETUSER,
  GET_INCREASE,
  GET_DECREASE,
  CACULATION,
  GETPRODUCT,
  GETPRODUCT_SUCCESS,
  GETPRODUCT_FAIL,
  GET_UPDATEUSER

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

export const getProduct = (data) => ({
  type: GETPRODUCT,
  payload: data
});
export const getUpdateUser = (data) => ({
  type: GET_UPDATEUSER,
  payload: data
});


// export const getProductSuccess = (data) => ({
//   type: GETPRODUCT_SUCCESS,
//   payload: data
// });

// export const getProductFail = (data) => ({
//   type: GETPRODUCT_FAIL,
//   payload: data
// });



