import {
  INCREMENT,
  DECREMENT,
  SQUARE,
  SQRT,
  RESET,
  PLUS,
  SUBTRACT,
  MULTIPLY,
  DIVIDE
} from "../actions/type";

const initialState = {
  data: 1,
  isLoading: true,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, data: state.data + 1 }
    }
    case DECREMENT: {
      return { ...state, data: state.data - 1 }
    }
    case SQUARE: {
      return { ...state, data: state.data * state.data }
    }
    case SQRT: {
      return { ...state, data: Math.sqrt(state.data) }
    }
    case RESET: {
      return { ...state, data: state.data }
    }
    case PLUS: {
      let tmpData
      return { ...state, data: tmpData = Number(action.payload.firstNumber) + Number(action.payload.secondNumber) }
    }
    case SUBTRACT: {
      let tmpData
      return { ...state, data: tmpData = Number(action.payload.firstNumber) - Number(action.payload.secondNumber) }
    }
    case MULTIPLY: {
      let tmpData
      return { ...state, data: tmpData = Number(action.payload.firstNumber) * Number(action.payload.secondNumber) }
    }
    case DIVIDE: {
      let tmpData
      return { ...state, data: tmpData = Number(action.payload.firstNumber) / Number(action.payload.secondNumber) }
    }
  }
  return state;
}

