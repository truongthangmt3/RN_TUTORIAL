import { combineReducers } from "redux";
import ProductReducer from './ProductReducer';
import UserReducer from "./UserReducer";
import { RESET } from "../actions/type";

appReducer = combineReducers({
  userReducer: UserReducer,
  productReducer: ProductReducer,
});

const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}