import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/post/Action";

const ViewPost = (props) => {
    const post = useSelector((state) => state.postReducer.singlePost);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPost(props.match.params.id));
    }, [dispatch]);
console.log(post);
  return (
      <div>
          <h2>{post.data.title}</h2>
        <div
          className="post__description"
          dangerouslySetInnerHTML={{ __html: post.data.context }}
        />
      </div>
  );
};
export default ViewPost;
