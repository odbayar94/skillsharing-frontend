import { combineReducers } from "redux";
import post from "./post";
import allPosts from "./allPosts";
import singlePost from "./singlePost";

const postReducer = combineReducers({
  post,
  allPosts,
  singlePost,
});

export default postReducer;