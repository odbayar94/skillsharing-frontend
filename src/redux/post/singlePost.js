import { GET_POST_START, GET_POST_ERROR, GET_POST_SUCCESS } from "../constants";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
  errorMessage: null,
};

const singlePost = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POST_START:
      return { ...state, loading: true };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_POST_ERROR:
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
export default singlePost;