import {
  GET_APPROVED_POSTS_START,
  GET_APPROVED_POSTS_SUCCESS,
  GET_APPROVED_POSTS_FAILURE,
} from "../constants";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
  errorMessage: null,
};

const getApprovedPosts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_APPROVED_POSTS_START:
      return { ...state, loading: true };
    case GET_APPROVED_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_APPROVED_POSTS_FAILURE:
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
export default getApprovedPosts;
