import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, UPDATE_USER } from "../actions/type";

const initialState = {
    data: {},
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER: {
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload.data
            };
        }
        default:
            return state;
    }
}
