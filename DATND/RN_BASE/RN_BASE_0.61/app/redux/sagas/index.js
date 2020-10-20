import {
  watchGetUpdateUser,
  watchGetProduct
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetUpdateUser;
  yield watchGetProduct;
}
