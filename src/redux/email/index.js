import { combineReducers } from "redux";

import visibilityFilter from "./VisibilityFilter";
import selectedEmail from "./SelectedEmail";
import emailSearch from "./EmailSearch";
import emailContent from "./EmailContent";

const emailReducer = combineReducers({
  visibilityFilter,
  selectedEmail,
  emailSearch,
  emailContent,
});

export default emailReducer;
