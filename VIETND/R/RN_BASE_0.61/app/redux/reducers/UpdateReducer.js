import { GET_USERINFO_SUCCESS, GET_USER_INFO, GET_USERINFO_FAIL } from "../actions/type";

const initialState = {
  data: 1,
  isLoading: true,
  error: null
};

export default function (state = initialState, action) {


  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        isLoading: true
      };
    case GET_USERINFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case GET_USERINFO_FAIL:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload.error
      };

    default:
      break;
  }

  return state;
}
