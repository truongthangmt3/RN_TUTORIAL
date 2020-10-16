import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, GET_NOTIFICATIONS, INCREMENT, DECREMENT, SQUARE, SQRT, RESET } from "../actions/type";

const initialState = {
  data: 1,
  isLoading: true,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, data: state.data + 1 }
    }
    case DECREMENT: {
      return { ...state, data: state.data - 1 }
    }
    case SQUARE: {
      return { ...state, data: state.data * state.data }
    }
    case SQRT: {
      return { ...state, data: Math.sqrt(state.data) }
    }
    case RESET: {
      return { ...state, data: state.data }
    }
  }
  return state;
}

