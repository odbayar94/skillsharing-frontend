import { combineReducers } from "redux";
import notesReducer from "./notes/Reducer";
import emailReducer from "./email/";

const Reducers = combineReducers({
  emailReducer,
  notesReducer,
});

export default Reducers;
