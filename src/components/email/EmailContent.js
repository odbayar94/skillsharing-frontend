import React from "react";
import { useSelector } from "react-redux";

const EmailContent = () => {

  const postId = useSelector((state) => state.emailReducer.emailContent);
  // const posts = useSelector((state) => state.emailReducer.emails.data);
  const posts = useSelector((state) => state.userPostReducer.data);
  
  const emailDetails = posts.find(function (post) {
    if (post._id === postId) return true;
  });


  return emailDetails ? (
    <div>
      <div className="card-body border-bottom">
        <div className="d-flex align-items-center">
          <div className="ml-2">
            <h5 className="mb-0 font-16 font-medium">{emailDetails.title}</h5>
            <span
              className={
                "ml-1 badge " +
                (emailDetails.status === "Pending" ? "badge-warning" : "") +
                (emailDetails.status === "Published" ? "badge-success" : "") +
                (emailDetails.status === "Draft" ? "badge-danger" : "")
              }
            >
              {emailDetails.status}
            </span>
          </div>
          <div className="ml-auto">
            <span>{emailDetails.createdAt}</span>
          </div>
        </div>
      </div>
      <div
        className="card-body"
        dangerouslySetInnerHTML={{ __html: emailDetails.context }}
      ></div>
    </div>
  ) : (
    <div className="d-flex h-100 p-4 flex-column align-items-center justify-content-center">
      <h4 className="mt-2">Бичвэрээ сонгоно уу</h4>
    </div>
  );
};

export default EmailContent;
