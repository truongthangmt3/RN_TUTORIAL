
import { UPDATE_USER_INFO } from "../actions/type";

const initialState = {
    data: {
        name: "",
        phoneNumber: ""
    },
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    if (action.type == UPDATE_USER_INFO) {
        return {
            ...state,
            isLoading: true,
            data: action.payload
        }
    }
    return state;
}