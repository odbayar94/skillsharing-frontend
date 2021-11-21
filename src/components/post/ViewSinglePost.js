import React from "react";
import { Row, Col } from "reactstrap";
const ViewSinglePost = (props) => {

  return (
    <div>
      <h2 className="viewpost_title">{props.title}</h2>
      <Row className="xs-4 p-2">
        <Col lg="6" md="12" className="">
          <div>{props.createdAt}</div>
        </Col>
        <Col lg="6" md="12" className="text-right">
          <div>
            <i className="fa fa-heart text-danger" /> {props.clapsNumber}{" "}
            таалагдсан
          </div>
        </Col>
      </Row>

      <div className="viewpost_body">
        <div
          className="post__description"
          dangerouslySetInnerHTML={{ __html: props.context }}
        />
      </div>
    </div>
  );
};
export default ViewSinglePost;
