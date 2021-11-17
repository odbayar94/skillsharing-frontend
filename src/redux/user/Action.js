import { Dispatch } from "redux";
import axios from "axios";
import Cookies from "js-cookie";

import { REST_API_URL } from "../constants";

import {
  SIGN_IN_START,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  LOGOUT,
} from "../constants";

export const loginUser = (username, password) => async (dispatch) => {
  dispatch(loginUserStart());

  const data = {
    username,
    password,
  };

  axios
    .post(REST_API_URL + "/users/login", data)
    .then((result) => {
      Cookies.set("token", result.data.user.token);

      dispatch(
        loginUserSuccess(result.data.user.token, result.data.user.userId)
      );
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

        dispatch(loginUserError(error));
      } else {
        dispatch(loginUserError(err));
      }
    });
};

export const loginUserStart = () => {
  return {
    type: SIGN_IN_START,
  };
};

export const loginUserSuccess = (token: String, userId: String) => {
  return {
    type: SIGN_IN_SUCCESS,
    token,
    userId,
  };
};

export const loginUserError = (error: any) => {
  return {
    type: SIGN_IN_FAILURE,
    errorMessage: error.response.data.error.message,
  };
};

export function logOut() {
  Cookies.remove("token");
  return {
    type: LOGOUT,
  };
}
