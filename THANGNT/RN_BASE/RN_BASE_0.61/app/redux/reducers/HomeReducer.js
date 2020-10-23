import { act } from 'react-test-renderer';
import { CALCULATION, GET_HOME } from '../actions/type';

const initialState = {
  data: 1,
  isLoading: false,
  error: null
};

export default function(state = initialState, action) {
  if (action.type == CALCULATION) {
    let tmpData;
    if (action.payload.calculation == 0) {
      tmpData = Number(action.payload.firstNumber) + Number(action.payload.secondNumber);
    }
    if (action.payload.calculation == 1) {
      tmpData = Number(action.payload.firstNumber) - Number(action.payload.secondNumber);
    }

    return {
      ...state,
      data: tmpData
    };
  }
  return state;
}
