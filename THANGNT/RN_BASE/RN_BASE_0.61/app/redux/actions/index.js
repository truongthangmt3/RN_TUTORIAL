// eslint-disable-next-line import/no-unresolved
import * as API from '@api';
import { GET_USER, GET_HOME, CALCULATION, GET_PRODUCT_SUCCESS, GET_PRODUCT, GET_PRODUCT_FAIL } from './type';

export const getUserInfo = (data) => ({
  type: GET_USER,
  payload: data,
});

export const getHome = (data) => ({
  type: GET_HOME,
  payload: data,
});

export const calculation = (data) => ({
  type: CALCULATION,
  payload: data,
});

// redux thunk
export const getProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PRODUCT,
    });
    const response = await API.requestHomeData();
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error,
    });
  }
};
