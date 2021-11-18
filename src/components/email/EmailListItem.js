import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";

const Email = ({
  _id,
  active,
  onClick,
  title,
  createdAt,
  status,
}) => (
  <li
    className={
      "list-group-item p-3 border-bottom " + (active === _id ? "bg-light" : "")
    }
  >
    <Row>
      <Col xs={10} onClick={onClick}>
        <div>
          <p className="text-truncate w-100 mb-0">{title}</p>
          <div className="mt-2 d-flex align-items-center">
            <div className="mr-2">
              <span
                className={
                  "badge " +
                  (status === "Pending" ? "badge-warning" : "") +
                  (status === "Published" ? "badge-success" : "") +
                  (status === "Draft" ? "badge-danger" : "")
                }
              >
                {status}
              </span>
            </div>
           
            <div className="ml-auto">
              <span className="text-muted font-12">{createdAt}</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </li>
);

Email.propTypes = {

  title: PropTypes.func.isRequired,
  createdAt: PropTypes.func.isRequired,
  context: PropTypes.string.isRequired,
 
};

export default Email;
