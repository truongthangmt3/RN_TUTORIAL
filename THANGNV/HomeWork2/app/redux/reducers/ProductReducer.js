
import { GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from "../actions/type";

const initialState = {
    data: 0,
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                data: null
            }
        default:
            return state;
    }
}