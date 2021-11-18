import React, { useEffect } from "react";
import Email from "./EmailListItem";
import {getUserPost} from "../../redux/post/Action";
import {
  openEmail,
} from "../../redux/email/Action";
import { useSelector, useDispatch } from "react-redux";

const EmailList = ({ showRightPart }) => {
  const posts = useSelector((state) => state.emailReducer.emails);
  console.log(posts.data);
  // const posts = useSelector((state) => state.userPostReducer);
  const dispatch = useDispatch();
 const user = useSelector((state) => state.user);
   useEffect(() => {
     dispatch(getUserPost(user.userId));
   }, [dispatch, user.userId]);

   

  return (
    <ul className="list-group listing-email-over">
      {posts.data.map((post) => {
        console.log(post._id)
        return <Email
          key={post._id}
          {...post}
          onClick={() => {
            dispatch(openEmail(post._id));
            showRightPart();
          }}
        />
        })}
    </ul>
  );
};

export default EmailList;
