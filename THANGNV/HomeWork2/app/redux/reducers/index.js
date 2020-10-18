import { combineReducers } from "redux";
import CountReducer from './CountReducer';
import ProductReducer from './ProductReducer';
import { RESET } from "../actions/type";

appReducer = combineReducers({
  countReducer: CountReducer,
  productReducer: ProductReducer,
});

const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}