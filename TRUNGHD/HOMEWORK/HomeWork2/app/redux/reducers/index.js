import { combineReducers } from "redux";
import CountReducer from './CountReducer';
import ProductReducer from './ProductReducer';
import { RESET } from "../actions/type";
import UpdateInforReducer from './UpdateInforReducer';

appReducer = combineReducers({
  countReducer: CountReducer,
  productReducer: ProductReducer,
  updateReducer: UpdateInforReducer
});

const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}