import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/post/Action";
import ViewSinglePost from "../../components/post/ViewSinglePost";
const ViewPost = (props) => {
    const post = useSelector((state) => state.postReducer.singlePost);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPost(props.match.params.id));
    }, [dispatch, props.match.params.id]);
  return (
    <ViewSinglePost
      title={post.data.title}
      context={post.data.context}
      createdAt={post.data.createdAt}
      clapsNumber={post.data.clapsNumber}
    />
  );
};
export default ViewPost;
