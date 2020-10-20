import { GET_HOME, CALCULATION } from "../actions/type";

const initialState = {
    data: 0,
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    if (action.type == CALCULATION) {
        let tmpData;
        if (action.payload.calculation == 0) {
            tmpData = Number(action.payload.firstNumber) + Number(action.payload.secondNumber);
        }
        if (action.payload.calculation == 1) {
            tmpData = Number(action.payload.firstNumber) - Number(action.payload.secondNumber);
        }
        if (action.payload.calculation == 2) {
            tmpData = Number(action.payload.firstNumber) * Number(action.payload.secondNumber);
        }
        if (action.payload.calculation == 3) {
            tmpData = Number(action.payload.firstNumber) / Number(action.payload.secondNumber);
        }

        return {
            ...state,
            data: tmpData
        };
    }
    return state;
}