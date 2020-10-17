import { GET_INCREASE, GET_DECREASE, CALCULATION } from "../actions/type";
const initialState = {
    data: 0,
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    // switch (action.type) {
    //     case GET_INCREASE:
    //         return {
    //             ...state,
    //             isLoading: true,
    //             data: state.data + 1
    //         }
    //     case GET_DECREASE:
    //         return {
    //             ...state,
    //             isLoading: true,
    //             data: state.data - 1
    //         }
    //     default:
    //         return state;
    // }
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