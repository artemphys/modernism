import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";

/**
 * The store has the following responsibilities:
 Holds application state;
 Allows access to state via getState();
 Allows state to be updated via dispatch(action);
 Registers listeners via subscribe(listener);
 Handles unregistering of listeners via the function returned by subscribe(listener).
 */
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
