import { combineReducers } from "./combineReducers";
import { userReducers, dataReducers } from "./reducers";
import { stateReducers, modalReducers } from "./reducers";

export const rootReducers = combineReducers({
  userReducers,
  dataReducers,
  modalReducers,
  stateReducers,
});
