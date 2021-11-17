import axios from "axios";
import Cookies from "js-cookie";

import { REST_API_URL } from "../constants";

import {
  SIGN_IN_START,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  LOGOUT,
  REGISTER_START,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../constants";

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginUserStart());
  const data = {
    email,
    password,
  };

  axios
    .post(REST_API_URL + "/users/login", data)
    .then((result) => {
      Cookies.set("token", result.data.data.token);
      dispatch(
        loginUserSuccess(
          result.data.data.id,
          result.data.data.firstname,
          result.data.data.email
        )
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

export const loginUserSuccess = (userId, firstname, email) => {
  return {
    type: SIGN_IN_SUCCESS,
    userId,
    firstname,
    email
  };
};

export const loginUserError = (error) => {
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

export const register = (firstname, lastname, email, password) => async (dispatch) => {
dispatch(registerUser());
const data = {
  firstname,
  lastname,
  email,
  password,
};
  axios
    .post(REST_API_URL + "/users/register", data)
    .then((result) => {
      Cookies.set("token", result.data.user.user.token);
      dispatch(
        registerUserSuccess(
          result.data.data.id,
          result.data.data.firstname,
          result.data.data.email
        )
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

        dispatch(registerUserError(error));
      } else {
        dispatch(registerUserError(err));
      }
    });
}

const registerUser = ()=>{
  return {
    type: REGISTER_START,
  };
}

const registerUserSuccess = (userId, firstname, email) => {
  return {
    type: REGISTER_SUCCESS,
    userId,
    firstname,
    email
  };
};

const registerUserError = (error) => {
  return {
    type: REGISTER_FAILURE,
    errorMessage: error.response.data.error.message,
  };
};
