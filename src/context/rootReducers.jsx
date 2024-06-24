import { combineReducers } from "./combineReducers";
import { userReducers, dataReducers, formsReducers } from "./reducers";
import { stateReducers, modalReducers } from "./reducers";

export const rootReducers = combineReducers({
  userReducers,
  dataReducers,
  formsReducers,
  modalReducers,
  stateReducers,
});
