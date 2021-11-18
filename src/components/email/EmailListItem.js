import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";

const Email = ({
  _id,
  active,
  onClick,
  onChange,
  title,
  createdAt,
  status,
}) => {
  console.log(title);
  return (
    <li
      className={
        "list-group-item p-3 border-bottom " +
        (active === _id ? "bg-light" : "")
      }
    >
      <Row>
        <Col xs={1}>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              id={"check" + _id}
              className="custom-control-input"
              onChange={onChange}
            />
            <label className="custom-control-label" htmlFor={"check" + _id}>
              {" "}
            </label>
          </div>
        </Col>
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
};

Email.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Email;
