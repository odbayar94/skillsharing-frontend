import { combineReducers } from "redux";
import post from "./post";
import getApprovedPosts from "./getApprovedPosts";
import getAllPosts from "./getAllPosts";
import singlePost from "./singlePost";

const postReducer = combineReducers({
  post,
  getAllPosts,
  getApprovedPosts,
  singlePost,
});

export default postReducer;