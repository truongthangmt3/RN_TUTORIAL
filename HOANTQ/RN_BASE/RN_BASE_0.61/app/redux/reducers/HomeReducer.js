import {GET_HOME, INCREMENT,DECREMENT } from "../actions/type";

const initialState = {
  data: 1,
  isLoading: true,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:{
      return{
        ...state,
        data: state.data +1
      }
    }
    case DECREMENT:{
      return{
        ...state,
        data: state.data -1
      }
    }
    default:
      return state;
  }
}
