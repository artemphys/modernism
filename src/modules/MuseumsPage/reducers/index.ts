import {
  GET_MUSEUMS_REQUEST,
  GET_MUSEUMS_SUCCESS,
  GET_MUSEUMS_FAIL
} from "../../../constants";

export const initialState = {
  data: null,
  isFetching: false,
  error: ""
};

export const museumsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_MUSEUMS_REQUEST:
      return { ...state, isFetching: true, error: "" };
    case GET_MUSEUMS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case GET_MUSEUMS_FAIL:
      return { ...state, data: action.payload.message, isFetching: false };
    default:
      return state;
  }
};
