import { put, takeEvery, call, takeLatest } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GETPRODUCT_FAIL,
  GET_USER_FAIL,
  GETPRODUCT,
  GETPRODUCT_SUCCESS,
  GET_UPDATEUSER_SUCCESS,
  GET_UPDATEUSER_FAIL,
  GET_UPDATEUSER
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
    yield put({ type: GETPRODUCT_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GETPRODUCT_FAIL, payload: error });

  }
}

export function* getUpdateUser(payload) {
  try {
    const response = yield call(API.requestUpdateUser, payload);
    yield put({ type: GET_UPDATEUSER_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GET_UPDATEUSER_FAIL, payload: error });

  }
}


export const watchGetUpdateUser = takeEvery(GET_USER, getUpdateUser);
export const watchGetProduct = takeLatest(GET_UPDATEUSER, getProduct);

