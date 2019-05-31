import {
  GET_MUSEUM_REQUEST,
  GET_MUSEUM_SUCCESS,
  GET_MUSEUM_FAIL
} from "../../../constants";
import { table_data } from "../../../mock";

export const getMuseums = () => async (dispatch: any) => {
  dispatch({
    type: GET_MUSEUM_REQUEST,
    payload: {}
  });
  try {
    dispatch({
      type: GET_MUSEUM_SUCCESS,
      payload: table_data
    });
  } catch (e) {
    dispatch({
      type: GET_MUSEUM_FAIL,
      error: true,
      payload: new Error(e)
    });
  }
};
