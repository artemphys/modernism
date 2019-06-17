import {
  GET_ARTIST_FAIL,
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCESS
} from "../../../../constants";

export const initialState = {
  data: null,
  isFetching: false,
  error: ""
};

export const artistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ARTIST_REQUEST:
      return { ...state, isFetching: true, error: "" };
    case GET_ARTIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case GET_ARTIST_FAIL:
      return { ...state, data: action.payload.message, isFetching: false };
    default:
      return state;
  }
};
