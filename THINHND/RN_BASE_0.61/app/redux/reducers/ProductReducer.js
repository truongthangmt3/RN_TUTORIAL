import { GET_HOME, GET_HOME_SUCCESS, GET_HOME_FAIL } from "../actions/type";

const initialState = {
    data: 1,
    isLoading: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOME:
            return {
                ...state,
                isLoading: true,
            };
        case GET_HOME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        case GET_HOME_FAIL:
            return {
                ...state,
                isLoading: false,
                data: null,
                error: action.payload.error,
            };

        default:
            break;
    }
    return state;
}

