// import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from "../actions/type";

// const initialState = {
//   data: {},
//   isLoading: false,
//   error: null
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case GET_USER: {
//       return { ...state, isLoading: true };
//     }
//     case GET_USER_SUCCESS: {
//       return {
//         ...state,
//         isLoading: true,
//         error: null,
//         data: action.payload
//       };
//     }
//     case GET_USER_FAIL: {

//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     }
//     default:
//       return state;
//   }
// }

import { GET_USER, CACULATION } from "../actions/type";

const initialState = {
  data: {},
  isLoading: false,
  error: null
};


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }


    default:
      return state;
  }
}


//1 tao reducer 
//2 



