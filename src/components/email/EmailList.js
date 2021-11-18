import React from "react";
import Email from "./EmailListItem";
import {
  openEmail,
} from "../../redux/email/Action";
import { useSelector, useDispatch } from "react-redux";

const EmailList = ({ showRightPart }) => {

  const posts = useSelector((state) => state.emailReducer.emails);

  const active = useSelector((state) => state.emailReducer.emailContent);

  const dispatch = useDispatch();

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
