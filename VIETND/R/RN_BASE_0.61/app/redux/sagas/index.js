import {
  watchGetUserInfo, watchGetProduct
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetUserInfo;
  yield watchGetProduct;
}
