import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import HomeReducer from "./HomeReducer";
import CareReducer from "./CareReducer";
import ProductReducer from "./NotificationReducer";
import { RESET } from "../actions/type";
appReducer = combineReducers({
  userReducer: UserReducer,
  homeReducer: HomeReducer,
  careReducer: CareReducer,
  productReducer: ProductReducer,
});

const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}
