import { combineReducers } from "./combineReducers";

import { userReducers, dataReducers } from "./reducers";
import { stateReducers, modalReducers } from "./reducers";

/**
 * The root reducer function for combining all the reducers.
 *
 * @function
 * @name rootReducers
 * @returns {Object} The combined state object.
 */
export const rootReducers = combineReducers({
  userReducers,
  dataReducers,
  modalReducers,
  stateReducers,
});
