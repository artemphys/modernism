import { combineReducers } from "redux";
import { artistsReducer } from "./modules/ArtistsPage/reducers";
import { museumsReducer } from "./modules/MuseumsPage/reducers";

export const rootReducer = combineReducers({
  artists: artistsReducer,
  museums: museumsReducer
});
