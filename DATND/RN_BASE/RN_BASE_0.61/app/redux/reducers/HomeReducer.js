
import { GETUSER, GET_INCREASE, GET_DECREASE, CACULATION } from "../actions/type";
import { act } from 'react-test-renderer';

const initialState = {
  data: 1,
  isLoading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CACULATION:
      let tmpData;
      if (action.payload.caculation == 0) {
        tmpData = Number(action.payload.firstNumber) + Number(action.payload.secondNumber);
      }
      if (action.payload.caculation == 1) {
        tmpData = Number(action.payload.firstNumber) - Number(action.payload.secondNumber);
      }
      if (action.payload.caculation == 2) {
        tmpData = Number(action.payload.firstNumber) * Number(action.payload.secondNumber);
      }
      if (action.payload.caculation == 3) {
        tmpData = Number(action.payload.firstNumber) / Number(action.payload.secondNumber);
      }

      return {
        ...state,
        data: tmpData
      };
    case GETUSER:
      return {
        ...state,
        data: action.payload.user
      }


    default:
      return state;
  }
}





