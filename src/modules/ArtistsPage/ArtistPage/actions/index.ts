import {
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAIL
} from "../../../../constants";
import { ARTIST_DATA } from "../../../../mock";

export const getArtist = () => async (dispatch: any) => {
  dispatch({
    type: GET_ARTIST_REQUEST,
    payload: {}
  });

  try {
    dispatch({
      type: GET_ARTIST_SUCCESS,
      payload: ARTIST_DATA
    });
  } catch (e) {
    dispatch({
      type: GET_ARTIST_FAIL,
      error: true,
      payload: new Error(e)
    });
  }
};
