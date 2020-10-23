import {
  watchGetUser,
  watchProduct,
  watchGetUpdate
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetUser;
  yield watchProduct;
  yield watchGetUpdate
}
