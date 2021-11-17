import { combineReducers } from "redux";
import notesReducer from "./notes/Reducer";
import emailReducer from "./email/";
import user from "./user/Reducer";
const Reducers = combineReducers({
  user,
  emailReducer,
  notesReducer,
});

export default Reducers;
