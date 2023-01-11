import { combineReducers } from "redux";
import listItems from "./reducer";
import favoriteReducer from "./favoritereducer";
export default combineReducers({
  listItems,
  favoriteReducer,
});
