import { combineReducers } from "redux";
import card from "./Reducer";

const dashboardReducer = combineReducers({
  card,
});

export default dashboardReducer;