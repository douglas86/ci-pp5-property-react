import { combineReducers } from "./combineReducers";
import { userReducers, dataReducers, formsReducers } from "./reducers";
import { stateReducers } from "./reducers";

export const rootReducers = combineReducers({
  userReducers,
  dataReducers,
  formsReducers,
  stateReducers,
});
