import { GET_USER } from "../actions/type";

const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    default:
      return state;
  }
}
