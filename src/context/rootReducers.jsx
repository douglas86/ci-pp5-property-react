import { combineReducers } from "./combineReducers";
import { userReducers, dataReducers, formsReducers } from "./reducers";

export const rootReducers = combineReducers({
  userReducers,
  dataReducers,
  formsReducers,
});
