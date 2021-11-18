import {
  GET_USER_POST_START,
  GET_USER_POST_FAILURE,
  GET_USER_POST_SUCCESS,
} from "../constants";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
  errorMessage: null,
};

const userPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_POST_START:
      return { ...state, loading: true };
    case GET_USER_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_USER_POST_FAILURE:
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
export default userPostReducer;
