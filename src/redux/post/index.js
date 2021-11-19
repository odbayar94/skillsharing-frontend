import { combineReducers } from "redux";
import post from "./post";
import allPosts from "./allPosts";

const postReducer = combineReducers({
  post,
  allPosts
});

export default postReducer;