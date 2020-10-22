import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from '../actions/type';

const initialState = {
    data: 1,
    isLoading: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                isLoading: true,
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        case GET_PRODUCT_FAIL:
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
