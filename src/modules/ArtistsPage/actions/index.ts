import {
  GET_ARTISTS_REQUEST,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_FAIL
} from "../../../constants";

let DATA = [
  {
    id: "Vincent-Willem-van-Gogh",
    name: "Vincent Willem van Gogh",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1135px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    id: "Eugène-Henri-Paul-Gauguin",
    name: "Eugène Henri Paul Gauguin",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Paul_Gauguin_036.jpg/1148px-Paul_Gauguin_036.jpg"
  },
  {
    id: "Paul-Cézanne",
    name: "Paul Cézanne",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Woman_in_a_Green_Hat_%28by_Paul_C%C3%A9zanne%2C_1894-95%29.jpg"
  }
];

export const getArtists = () => (dispatch: any) => {
  dispatch({
    type: GET_ARTISTS_REQUEST,
    payload: {}
  });

  try {
    setTimeout(() => {
      dispatch({
        type: GET_ARTISTS_SUCCESS,
        payload: DATA
      });
    }, 1000);
  } catch (e) {
    dispatch({
      type: GET_ARTISTS_FAIL,
      error: true,
      payload: new Error(e)
    });
  }
};
