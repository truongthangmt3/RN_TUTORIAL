import { put, takeEvery, call } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT,
  UPDATE_USER_INFO
} from "../actions/type";

import * as API from "../../constants/Api";

export function* getUserInfor(payload) {
  try {
    const response = yield call(API.requestLogin, payload);
    yield put({ type: GET_USER_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_USER_FAIL, payload: err });
  }
}

export function* getProduct(payload) {
  try {
    const response = yield call(API.requestHomeData, payload);
    yield put({ type: GET_PRODUCT_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_PRODUCT_FAILURE, payload: err });
  }
}

export function* getUpdate(payload) {
  try {
    const response = yield call(API.requestUpdate, payload);
    yield put({ type: UPDATE_USER_INFO, payload: response });
  } catch (err) {

  }
}
export const watchGetUpdate = takeEvery(UPDATE_USER_INFO, getUpdate);
export const watchGetUser = takeEvery(GET_USER, getUserInfor);
export const watchProduct = takeEvery(GET_PRODUCT, getProduct);

