import { DECREMENT, INCREMENT, RESULT } from "../actions/type";

const initialState = {
    data: 0,
};

export default function (state = initialState, action) {
    let tempData;
    if (action.type == RESULT) {
        if (action.type == RESULT) {
            let temp;
            if (action.payload.calculation == '+') {
                temp = Number(action.payload.firstNumber) + Number(action.payload.secondNumber);
            }
            if (action.payload.calculation == '-') {
                temp = Number(action.payload.firstNumber) - Number(action.payload.secondNumber);
            }
            if (action.payload.calculation == '*') {
                temp = Number(action.payload.firstNumber) * Number(action.payload.secondNumber);
            }
            if (action.payload.calculation == '/') {
                temp = Number(action.payload.firstNumber) / Number(action.payload.secondNumber);
            }
            return {
                ...state,
                data: temp
            }
        }
        return state;
    } else {
        switch (action.type) {
            case INCREMENT:
                return {
                    ...state,
                    data: state.data + 1
                }
            case DECREMENT:
                return {
                    ...state,
                    data: state.data - 1
                }
            default:
                return state;
        }
    }
}