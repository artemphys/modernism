import {
  GET_MUSEUM_REQUEST,
  GET_MUSEUM_SUCCESS,
  GET_MUSEUM_FAIL
} from "../../../constants";

export const initialState = {
  data: null,
  isFetching: false,
  error: ""
};

export const museumsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_MUSEUM_REQUEST:
      return { ...state, isFetching: true, error: "" };
    case GET_MUSEUM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case GET_MUSEUM_FAIL:
      return { ...state, data: action.payload.message, isFetching: false };
    default:
      return state;
  }
};
