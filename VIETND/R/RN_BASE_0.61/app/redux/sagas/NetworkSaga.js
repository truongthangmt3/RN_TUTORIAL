import { put, takeEvery, call } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import {
  GET_USER,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT,
  GET_USER_INFO,
  GET_USERINFO_SUCCESS,
  GET_USERINFO_FAIL
} from "../actions/type";

import * as API from "../../constants/Api";

export function* getUserInfo(payload) {
  try {
    const response = yield call(API.updateUserInfo, payload);
    yield put({ type: GET_USERINFO_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_USERINFO_FAIL, payload: error });
  }
}
export function* getProduct(payload) {
  try {
    const response = yield call(API.requestHomeData, payload);
    yield put({ type: GET_PRODUCT_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_PRODUCT_FAIL, payload: error });
  }
}
export const watchGetUserInfo = takeEvery(GET_USER_INFO, getUserInfo);
export const watchGetProduct = takeEvery(GET_PRODUCT, getProduct);
