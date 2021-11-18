import React, {useEffect} from "react";
import Email from "./EmailListItem";
import {
  openEmail,
} from "../../redux/email/Action";
import {  getUserPost } from "../../redux/post/Action";
import { useSelector, useDispatch } from "react-redux";

const EmailList = ({ showRightPart }) => {

  //  const posts = useSelector((state) => state.emailReducer.emails);
   const posts = useSelector((state) => state.userPostReducer);
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   useEffect(() => {
     dispatch(getUserPost());
   }, [dispatch, user.userId]);


  const active = useSelector((state) => state.emailReducer.emailContent);


  return (
    <ul className="list-group listing-email-over">
      {posts.data.map((email) => (
        <Email
          key={email.id}
          active={active}
          {...email}
          onClick={() => {
            dispatch(openEmail(email._id));
          }}
        />
      ))}
    </ul>
  );
};

export default EmailList;
