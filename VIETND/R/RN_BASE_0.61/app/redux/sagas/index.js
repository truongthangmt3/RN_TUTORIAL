import {
  watchGetUser, watchGetProduct
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetUser;
  yield watchGetProduct;
}
