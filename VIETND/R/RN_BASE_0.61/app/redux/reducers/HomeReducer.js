import { GET_HOME, GET_TRU } from "../actions/type";

const initialState = {
  data: 1,
  isLoading: true,
  error: null
};

export default function (state = initialState, action) {
  if (action.type == GET_HOME) {
    return {
      ...state,
      data: state.data + 1
    }
  }
  if (action.type == GET_TRU) {
    return {
      ...state,
      data: state.data - 1
    }
  }
  return state;
}
