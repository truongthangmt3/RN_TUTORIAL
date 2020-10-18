
import {


    GETPRODUCT_SUCCESS,
    GETPRODUCT_FAIL,
    GETPRODUCT
} from "../actions/type";
import { act } from 'react-test-renderer';

const initialState = {
    data: 1,
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GETPRODUCT:
            return {
                ...state,
                isLoading: true,

            };

        case GETPRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,

            };
        case GETPRODUCT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error

            };




        default:
            return state;
    }
}





