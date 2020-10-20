import { GET_PRODUCT } from '../actions/type';

const initialState = {
  data: 1,
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  if (action.type === GET_PRODUCT) {
    return {
      ...state,
      data: state.data + 1,
    };
  }
  return state;
}
