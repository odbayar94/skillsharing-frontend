import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {sendPost, getUserPost} from "../../redux/post/Action"

const EmailSidebar = () => {
  let title, context;
const dispatch = useDispatch();

const sumbitPost = function (e) {
  e.preventDefault();

  dispatch(
    sendPost({
      title: title.value,
      context: context.value,
    })
  );

  title.value = null;
  context.value = null;
  dispatch(getUserPost());
  toggle();
};


  const [composeModal, setComposeModal] = useState(false);

  const toggle = () => {
    setComposeModal(!composeModal);
  };
  const [editorState, onEditorStateChange] = useState("");

  return (
    <div>
      <div className="p-3">
        <span className="p-3 w-100 bg-gradient-primary text-white">
          Миний бичсэн нийтлэл
        </span>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default EmailSidebar;
