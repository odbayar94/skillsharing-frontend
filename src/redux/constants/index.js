//System constant
// require("dotenv").config();
// export const REST_API_URL = process.env.REST_API_URI;
// export const REST_API_URL = "http://localhost:5001/api/v1";

require("dotenv").config();
export const REST_API_URL = process.env.REACT_APP_REST_API_URI;

// SETTINGS CONSTANTS
export const LOGO_BG = "LOGO_BG";
export const NAVBAR_BG = "NAVBAR_BG";
export const SIDEBAR_BG = "SIDEBAR_BG";
export const THEME = "THEME";
export const DIRECTION = "DIRECTION";
export const SIDEBAR_POSITION = "SIDEBAR_POSITION";
export const HEADER_POSITION = "HEADER_POSITION";
export const LAYOUT = "LAYOUT";
export const SIDEBAR_TYPE = "SIDEBAR_TYPE";

// CHAT CONSTANTS
export const FETCH_CHAT_SUCCESS = "FETCH_CHAT_SUCCESS";
export const SELECTED_CHAT = "SELECTED_CHAT";
export const SEARCH_USER = "SEARCH_USER";
export const MSG_SUBMIT = "MSG_SUBMIT";

// TODO CONSTANTS
export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE";
export const TOGGLE_STARRED_TODO = "TOGGLE_STARRED_TODO";
export const SET_VISIBILITY_FILTER_TODO = "SET_VISIBILITY_FILTER_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TODO_DETAILS = "TODO_DETAILS";
export const FILTER_TODO = "FILTER_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_TODO = "ADD_TODO";

// CONTACT CONSTANTS
export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const CONTACT_DETAILS = "CONTACT_DETAILS";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const FILTER_CONTACT = "FILTER_CONTACT";
export const TOGGLE_STARRED_CONTACT = "TOGGLE_STARRED_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

// EMAIL CONSTANTS
export const STAR_EMAIL = "STAR_EMAIL";
export const IMPORTANT_EMAIL = "IMPORTANT_EMAIL";
export const OPEN_EMAIL = "OPEN_EMAIL";
export const TRASH_EMAIL = "TRASH_EMAIL";
export const ASSIGN_FOLDER = "ASSIGN_FOLDER";
export const ASSIGN_LABEL = "ASSIGN_LABEL";
export const SET_SELECTED_EMAIL = "SET_SELECTED_EMAIL";
export const FILTER_EMAIL = "FILTER_EMAIL";
export const SET_EMAIL_VISIBILITY_FILTER = "SET_EMAIL_VISIBILITY_FILTER";

// NOTES CONSTANTS

export const SELECTED_NOTES = "SELECTED_NOTES";
export const SEARCH_NOTES = "SEARCH_NOTES";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";

//USER Constants
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const LOGOUT = "LOGOUT";

//User register contants
export const REGISTER_START = "REGISTER_START";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

//Get user post
export const GET_USER_POST_START = "GET_USER_POST_START";
export const GET_USER_POST_SUCCESS = "GET_USER_POST_SUCCESS";
export const GET_USER_POST_FAILURE = "GET_USER_POST_FAILURE";

//Send post
export const SEND_POST_START = "SEND_POST_START";
export const SEND_POST_SUCCESS = "SEND_POST_SUCCESS";
export const SEND_POST_FAILURE = "SEND_POST_FAILURE";

//Get All Post
export const GET_APPROVED_POSTS_START = "GET_APPROVED_POSTS_START";
export const GET_APPROVED_POSTS_SUCCESS = "GET_APPROVED_POSTS_SUCCESS";
export const GET_APPROVED_POSTS_FAILURE = "GET_APPROVED_POSTS_FAILURE";

//Get single post
export const GET_POST_START = "GET_POST_START";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_ERROR = "GET_POST_ERROR";


//Dashboard
export const DASHBOARD_START ="DASHBOARD_START" ;
export const DASHBOARD_ERROR = "DASHBOARD_ERROR"; 
export const DASHBOARD_SUCCESS = "DASHBOARD_SUCCESS";


//Get All Post
export const GET_ALL_POSTS_START ="GET_ALL_POSTS_START";
export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS";
export const GET_ALL_POSTS_ERROR = "GET_ALL_POSTS_ERROR";

//Approve post
export const APPROVED_POSTS_START ="APPROVED_POSTS_START";
export const APPROVED_POSTS_SUCCESS="APPROVED_POSTS_SUCCESS";
export const APPROVED_POSTS_ERROR = "APPROVED_POSTS_ERROR";


//Pagination
export const datatableTranslations = {
  previousText: "??????????",
  nextText: "????????????",
  loadingText: "?????????? ??????????...",
  noDataText: "?????????????? ??????????????????",
  pageText: "????????????",
  ofText: "/",
  rowsText: "",
};