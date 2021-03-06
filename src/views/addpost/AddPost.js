import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { sendPost} from "../../redux/post/Action";
import { ToastContainer} from "react-toastify";
import "./AddPost.css";


function AddPost(props) {
    const dispatch = useDispatch();
  const [userInfo, setuserInfo] = useState({
    title: "",
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  let editorState = EditorState.createEmpty();
  const [context, setContext] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setContext(editorState);
  };

  const addDetails = (event) => {
    event.preventDefault();
    event.persist();
    dispatch(
      sendPost({
        title: userInfo.title,
        context: userInfo.context.value,
      })
    );
    
    props.history.push("/posts");
  };

  return (
    <>
      <ToastContainer />
      <div className="App">
        <div className="container">
          <h2>Бичвэр оруулах</h2>
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label className="font-weight-normal">
                    {" "}
                    Гарчиг <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={userInfo.title}
                    onChange={onChangeValue}
                    className="form-control"
                    placeholder="Гарчиг"
                    required
                  />
                </div>
                <div className="form-group col-md-12 editor">
                  <label className="font-weight-normal">
                    {" "}
                    Бичвэр <span className="required"> * </span>{" "}
                  </label>
                  <Editor
                    editorState={context}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                  />
                  <textarea
                    style={{ display: "none" }}
                    disabled
                    ref={(val) => (userInfo.context = val)}
                    value={draftToHtml(
                      convertToRaw(context.getCurrentContent())
                    )}
                  />
                </div>

                <div className="form-group col-sm-12 text-right">
                  <button type="submit" className="btn btn__theme">
                    Илгээх
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddPost;
