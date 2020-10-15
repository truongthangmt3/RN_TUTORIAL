import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import HomeReducer from './HomeReducer';
import { RESET } from '../actions/type';

appReducer = combineReducers({
  userReducer: UserReducer,
  homeReducer: HomeReducer
});

const initialState = appReducer({}, {});

export default (rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState;
  }

  return appReducer(state, action);
});
