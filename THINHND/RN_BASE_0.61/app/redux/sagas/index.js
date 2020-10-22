import {
  watchGetUser,
  watchGetHome,
  watchUpdateUser
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetUser;
  yield watchGetHome;
  yield watchUpdateUser;
}
