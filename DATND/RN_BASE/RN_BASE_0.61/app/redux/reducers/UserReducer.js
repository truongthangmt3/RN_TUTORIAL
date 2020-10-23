
import {
  GET_USER,
  CACULATION,
  GET_UPDATEUSER,
  GET_UPDATEUSER_SUCCESS,
  GET_UPDATEUSER_FAIL
} from "../actions/type";

const initialState = {
  data: 1,
  isLoading: false,
  error: null
};


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_UPDATEUSER:
      return {
        ...state,
        isLoading: true,

      }
    case GET_UPDATEUSER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        

      }
    case GET_UPDATEUSER_FAIL:
      return {
        ...state,
        isLoading: true,

      }




    default:
      return state;
  }
}


//1 tao reducer 
//2 



