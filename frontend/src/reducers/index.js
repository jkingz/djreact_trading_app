import { combineReducers } from "redux";

import trading from "./trading";
import auth from "./auth";

export default combineReducers({
  trading,
  auth
});
