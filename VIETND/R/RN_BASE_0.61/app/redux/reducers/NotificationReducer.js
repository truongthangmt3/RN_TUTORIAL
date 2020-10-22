import { GET_PRODUCT, GET_USER_SUCCESS, GET_USER_FAIL } from '../actions/type'
const initialState = {
  data: {},
  isLoading: true,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        data: action.payload.error
      }


  }
  return state;
}
