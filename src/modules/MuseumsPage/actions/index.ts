import {
  GET_MUSEUMS_REQUEST,
  GET_MUSEUMS_SUCCESS,
  GET_MUSEUMS_FAIL
} from "../../../constants";
import { MUSEUMS } from "../../../mock";

export const getMuseums = () => async (dispatch: any) => {
  dispatch({
    type: GET_MUSEUMS_REQUEST,
    payload: {}
  });
  try {
    dispatch({
      type: GET_MUSEUMS_SUCCESS,
      payload: MUSEUMS
    });
  } catch (e) {
    dispatch({
      type: GET_MUSEUMS_FAIL,
      error: true,
      payload: new Error(e)
    });
  }
};
