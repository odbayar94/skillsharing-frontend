import axios from "axios";
import Cookies from "js-cookie";


import {
  REST_API_URL,
  GET_USER_POST_START,
  GET_USER_POST_SUCCESS,
  GET_USER_POST_FAILURE,
  SEND_POST_START,
  SEND_POST_SUCCESS,
  SEND_POST_FAILURE,
} from "../constants";

export const getUserPost = (userId) => async (dispatch) => {
  dispatch(getUserPostStart());
  const token = Cookies.get("token");

  axios
    .get(REST_API_URL + "/posts/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
        
      dispatch(getUserPostSuccess(result.data.data));
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

        dispatch(getUserPostError(error));
      } else {
        dispatch(getUserPostError(err));
      }
    });
};


const getUserPostStart = ()=>{
    return {
      type: GET_USER_POST_START,
    };
}

const getUserPostSuccess = (data)=>{
  return {
    type: GET_USER_POST_SUCCESS,
    data
  };
}

const getUserPostError = () => {
  return {
    type: GET_USER_POST_FAILURE,
  };
};

export const sendPost = (data) => async (dispatch) =>{
    console.log(data);
    dispatch(sendPostStart());
    const token = Cookies.get("token");
    axios
      .post(REST_API_URL + "/posts", data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        
        dispatch(
          sendPostSuccess(
            result.data.data.id,
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

          dispatch(sendPostError(error));
        } else {
          dispatch(sendPostError(err));
        }
      });
}
const sendPostStart = () => {
    return {
      type: SEND_POST_START,
    };
}

const sendPostSuccess = (id) => {
  return {
    type: SEND_POST_SUCCESS,
    id
  };
};

const sendPostError = () => {
  return {
    type: SEND_POST_FAILURE,
  };
};