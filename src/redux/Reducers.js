import { combineReducers } from "redux";
import emailReducer from "./email/";
import postReducer from "./post";
import user from "./user/Reducer";
import userPostReducer from "./post/Reducer";
import dashboardReducer from "./dashboard"
const Reducers = combineReducers({
  user,
  emailReducer,
  postReducer,
  userPostReducer,
  dashboardReducer,
});

export default Reducers;
