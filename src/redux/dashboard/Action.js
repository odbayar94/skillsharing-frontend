import axios from "axios";
import Cookies from "js-cookie";


import {
  REST_API_URL,
  DASHBOARD_START,
  DASHBOARD_ERROR,
  DASHBOARD_SUCCESS,
} from "../constants";

export const getDashboard = () => async(dispatch) => {
  const token = Cookies.get("token");
  dispatch(dashboardStart());
  axios
    .get(REST_API_URL + "/dashboards", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
      dispatch(dashboardSuccess(result.data.data));
    })
    .catch((err) => {
      if (!err.response) {
        const error = {
          response: {
            data: {
              error: {
                message: "Сервертэй холбогдоход алдаа гарлаа",
              },
            },
          },
        };

        dispatch(dashboardError(error));
      } else {
        dispatch(dashboardError(err));
      }
    });
}
const dashboardStart = ()=>{
      return {
        type: DASHBOARD_START,
      };
}

const dashboardSuccess = (data) => {
  return {
    type: DASHBOARD_SUCCESS,
    data,
  };
};
const dashboardError = (error) => {
  return {
    type: DASHBOARD_ERROR,
    errorMessage: error.response.data.error.message,
  };
};