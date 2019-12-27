import {
  GET_ARTISTS_REQUEST,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_FAIL
} from "../../../constants";

export const initialState = {
  data: null,
  isFetching: false,
  error: ""
};

export const artistsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ARTISTS_REQUEST:
      return { ...state, isFetching: true, error: "" };
    case GET_ARTISTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: "error"
      };
    case GET_ARTISTS_FAIL:
      return { ...state, data: action.payload.message, isFetching: false };
    default:
      return state;
  }
};
