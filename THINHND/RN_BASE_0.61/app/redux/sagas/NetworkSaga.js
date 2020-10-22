import { put, takeEvery, call } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_HOME,
  GET_HOME_SUCCESS,
  GET_HOME_FAIL,
  UPDATE_USER,
} from "../actions/type";

import * as API from "../../constants/Api";

export function* getHomeData(payload) {
  try {
    const response = yield call(API.requestHomeData, payload);
    yield put({ type: GET_HOME_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_HOME_FAIL, payload: err });
  }
}

export function* updateUserData(payload) {
  try {
    const response = yield call(API.updateUserInfo, payload.payload);
    yield put({ type: UPDATE_USER, payload: response });
  } catch (err) {
  }
}
export const watchGetHome = takeEvery(GET_HOME, getHomeData);
export const watchUpdateUser = takeEvery(UPDATE_USER, updateUserData);

