import { DASHBOARD_START, DASHBOARD_ERROR, DASHBOARD_SUCCESS } from "../constants";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  salary: "-",
  point: "-",
  month: "-",
  errorMessage: null,
};

const card = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DASHBOARD_START:
      return { ...state, loading: true };
    case DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        salary: action.data.salary,
        point: action.data.point,
        month: action.data.month
      };
    case DASHBOARD_ERROR:
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
export default card;
