import { combineReducers } from "redux";
import notesReducer from "./notes/Reducer";
import emailReducer from "./email/";
import user from "./user/Reducer";
import userPostReducer from "./post/Reducer";
const Reducers = combineReducers({
  user,
  emailReducer,
  notesReducer,
  userPostReducer,
});

export default Reducers;
