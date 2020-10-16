import { GET_INCREASE, GET_REDUCTION, GET_MULTIPLY, GET_SHARE } from "../actions/type";

const initialState = {
    data: 1,
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INCREASE: {
            return {
                ...state,
                isLoading: true,
                data: state.data + 1
            };
        }
        case GET_REDUCTION: {
            return {
                ...state,
                isLoading: false,
                data: state.data - 1
            };
        }
        default:
            return state;
    }
}
