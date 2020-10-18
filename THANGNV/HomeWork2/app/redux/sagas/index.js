import {
  watchGetUser,
  watchProduct,
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetUser;
  yield watchProduct
}
