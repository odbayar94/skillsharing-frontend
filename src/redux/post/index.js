import { combineReducers } from "redux";
import post from "./post";
import getApprovedPosts from "./getApprovedPosts";
import singlePost from "./singlePost";

const postReducer = combineReducers({
  post,
  getApprovedPosts,
  singlePost,
});

export default postReducer;