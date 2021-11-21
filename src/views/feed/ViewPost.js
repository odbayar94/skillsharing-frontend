import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/post/Action";

const ViewPost = (props) => {
    const post = useSelector((state) => state.postReducer.singlePost);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPost(props.match.params.id));
    }, [dispatch, props.match.params.id]);
  return (
    <div>
      <h2 className="viewpost_title">{post.data.title}</h2>
      <div className="viewpost_body">
        <div
          className="post__description"
          dangerouslySetInnerHTML={{ __html: post.data.context }}
        />
      </div>
    </div>
  );
};
export default ViewPost;
