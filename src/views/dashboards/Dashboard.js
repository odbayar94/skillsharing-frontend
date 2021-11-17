import React from "react";
import { Row, Col } from "reactstrap";

import {
  
  TimeLine,
} from "../../components/dashboard/index.js";

const FirstDashboard = () => {
  return (
    <div>
      <Row>
        <Col md="12" xl="8" className="col-xlg-9">
          <TimeLine />
        </Col>
      </Row>
    </div>
  );
};

export default FirstDashboard;
