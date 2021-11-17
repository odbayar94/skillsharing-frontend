import {
  SIGN_IN_START,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  LOGOUT,
  REGISTER_START,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../constants";
import Cookies from "js-cookie";

export const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  error: false,
  errorMessage: null,
  userId: null,
  firstname: null,
  email: null,
  token: Cookies.get("token"),
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.userId,
        firstname: action.firstname,
        email: action.email
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    case LOGOUT:
      return { ...state, userId: null, token: null };
    case REGISTER_START:
      return { ...state, userId: null, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, userId: action.userId, firstname: action.firstname, email: action.email };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
export default userReducer;
