import { combineReducers } from "redux";
import { artistsReducer } from "./modules/ArtistsPage/reducers";
import { museumsReducer } from "./modules/MuseumsPage/reducers";
import { artistReducer } from "./modules/ArtistsPage/ArtistPage/reducers";

export const rootReducer = combineReducers({
  artists: artistsReducer,
  museums: museumsReducer,
  artist: artistReducer
});
