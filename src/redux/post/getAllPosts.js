import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
} from "../constants";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
  errorMessage: null,
};

const getAllPosts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_START:
      return { ...state, loading: true };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_ALL_POSTS_ERROR:
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
export default getAllPosts;
