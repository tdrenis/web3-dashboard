import { combineReducers } from "redux";
import listingsReducer from "./listingsReducer";
import poolsReducer from "./poolsReducer";
import ethReducer from "./ethReducer";

const rootReducer = combineReducers({
  listings: listingsReducer,
  pools: poolsReducer,
  eth: ethReducer,
});

export default rootReducer;