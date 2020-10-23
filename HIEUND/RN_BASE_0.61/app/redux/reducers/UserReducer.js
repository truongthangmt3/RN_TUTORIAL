import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, GET_NOTIFICATIONS, GET_USER_INFO } from '../actions/type';

const initialState = {
  data: {},
  isLoading: true,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
      return { ...state, isLoading: true };
    }
    case GET_USER_INFO: {
      return { ...state, isLoading: true, data: action.payload };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload.data
      };
    }
    case GET_USER_FAIL: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    case GET_NOTIFICATIONS: {
      return {
        ...state,
        error: null,
        data: action.payload
      };
    }
    default:
      return state;
  }
}
