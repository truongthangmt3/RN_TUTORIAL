import { combineReducers } from "redux";
import CountReducer from './CountReducer';
import { RESET } from "../actions/type";

appReducer = combineReducers({
  countReducer: CountReducer
});

const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}