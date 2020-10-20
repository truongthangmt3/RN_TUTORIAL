import {
  INCREMENT,
  DECREMENT,
  SQUARE,
  SQRT,
  RESET,
  PLUS,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  CALCULATION
} from "../actions/type";

const initialState = {
  data: 1,
  isLoading: true,
  error: null
};

export default function(state = initialState, action) {
  let tmpData;
  switch (action.type) {
    case CALCULATION: {
      if (action.payload.calculation == 0) {
        tmpData =
          Number(action.payload.firstNumber) +
          Number(action.payload.secondNumber);
      }
      return { ...state, data: tmpData };
    }
  }
  return state;
}
