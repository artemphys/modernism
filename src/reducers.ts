import { combineReducers } from "redux";
import { artistsReducer } from "./modules/ArtistsPage/reducers";

export const rootReducer = combineReducers({
  artists: artistsReducer
});
