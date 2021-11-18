import React, { Fragment, useState } from "react";
import EmailLists from "../../components/email/EmailList";
import EmailSidebar from "../../components/email/EmailSidebar";
import EmailContent from "../../components/email/EmailContent";

const Email = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setshowRight] = useState(false);

  const showLeftPart = () => {
    setShowLeft(!showLeft);
  };

  const showRightPart = () => {
    setshowRight(!showRight);
  };

  return (
    <Fragment>
      <div className="app-drawer">
        <div className="right-part bg-white app-drawer-content">
          <div className="right-left-part">
            <EmailSidebar />
            <EmailLists showRightPart={showRightPart.bind(null)} />
          </div>
          <div
            className={
              "right-right-part " +
              (showRight === true
                ? "show-right-right-panel"
                : "hide-right-right-part")
            }
          >
            <span
              onClick={() => {
                showRightPart();
              }}
              className={
                "hide-right-right-part d-block d-md-none " +
                (showRight === true ? "right-right-part-open" : "")
              }
            >
              <i className="fas fa-times"></i>
            </span>
            <EmailContent />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Email;