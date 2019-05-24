import {
  GET_ARTISTS_REQUEST,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_FAIL
} from "../../../constants";
import { ARTISTS_DATA } from "../../../mock";

const Url = "http://localhost:5000/api/artists";

const getData = async () => {
  const response = await fetch(Url);
  const body = await response.json();

  if (response.status !== 200) {
    return Error("Failed to fetch");
  } else {
    return body;
  }
};

export const getArtists = () => async (dispatch: any) => {
  dispatch({
    type: GET_ARTISTS_REQUEST,
    payload: {}
  });

  try {
    // const artists = await getData();
    dispatch({
      type: GET_ARTISTS_SUCCESS,
      payload: ARTISTS_DATA // artists.data[0].data
    });
  } catch (e) {
    dispatch({
      type: GET_ARTISTS_FAIL,
      error: true,
      payload: new Error(e)
    });
  }
};
