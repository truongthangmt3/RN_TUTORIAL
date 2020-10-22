import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import { RESET } from "../actions/type";
import HomeReducer from "./HomeReducer"
import ProductReducer from './ProductReducer'
import UpdateUserReducer from "./UpdateUserReducer";

appReducer = combineReducers({
  userReducer: UserReducer,
  homeReducer: HomeReducer,
  productReducer: ProductReducer,
  updateUserReducer: UpdateUserReducer,
});

const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}
