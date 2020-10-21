import { put, takeEvery, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from '../actions/type';

import * as API from '../../constants/Api';

export function* getUserInfor(payload) {
  try {
    const response = yield call(API.requestUser, payload);
    yield put({ type: GET_USER_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_USER_FAIL, payload: err });
  }
}

export function* getProduct(payload) {
  try {
    const response = yield call(API.requestUser, payload);
    yield put({ type: GET_PRODUCT_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GET_PRODUCT_FAIL, payload: error });
  }
}

export const watchGetUser = takeEvery(GET_USER, getUserInfor);
export const watchGetProduct = takeEvery(GET_PRODUCT, getProduct);
