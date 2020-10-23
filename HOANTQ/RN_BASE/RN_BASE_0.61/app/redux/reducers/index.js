import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import { RESET } from "../actions/type";
import HomeReducer from "./HomeReducer";
import ProductReducer from "./ProductReducer";
import GetUserInfoReducer from './GetUserInfoReducer'
import { ProductScreen } from "@app/screens/ProductScreen";

 appReducer= combineReducers({
  userReducer: UserReducer,
  homeReducer: HomeReducer,
  productReducer: ProductReducer,
  getUserInfo: GetUserInfoReducer
});

const initialState = appReducer({}, {})

export default  rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}
