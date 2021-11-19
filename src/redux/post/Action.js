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
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
} from "../constants";

export const getAllPosts = () => async(dispatch) => {
  dispatch(getAllPostsStart());
  axios
    .get(REST_API_URL + "/posts")
    .then((result) => {
      dispatch(getAllPostsSuccess(result.data.data));
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

        dispatch(getAllPostsError(error));
      } else {
        dispatch(getAllPostsError(err));
      }
    });
}
const getAllPostsStart = ()=>{
      return {
        type: GET_ALL_POSTS_START,
      };
}

const getAllPostsSuccess = (data) => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    data,
  };
};
const getAllPostsError = (error) => {
  return {
    type: GET_ALL_POSTS_FAILURE,
    errorMessage: error.response.data.error.message,
  };
};

export const getUserPost = () => async (dispatch) => {
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

const sendPostError = (error) => {
  return {
    type: SEND_POST_FAILURE,
    errorMessage: error.response.data.error.message,
  };
};

export const getPost = (id) => async(dispatch) => {
  dispatch(getPostStart());

  axios
    .get(REST_API_URL + `/posts/${id}`)
    .then((result) => {
      dispatch(getPostSuccess(result.data.data));
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

        dispatch(getPostError(error));
      } else {
        dispatch(getPostError(err));
      }
    });
}

const getPostStart = ()=> {
    return {
      type: GET_POST_START,
    };
}

const getPostSuccess = (data)=>{
  
    return {
      type: GET_POST_SUCCESS,
      data,
    };
}

const getPostError = (error) => {
  return {
    type: GET_POST_ERROR,
    errorMessage: error.response.data.error.message,
  };
};