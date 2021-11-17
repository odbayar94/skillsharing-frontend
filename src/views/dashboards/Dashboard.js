import React from "react";
import { Row, Col } from "reactstrap";

import {
  TimeLine,
  CardBandwidth,
  CardDownload,
} from "../../components/dashboard";

const FirstDashboard = () => {
  return (
    <div>
      <Row>
        <Col lg="6" md="12">
          <CardBandwidth />
        </Col>
        <Col lg="6" md="12">
          <CardDownload />
        </Col>
      </Row>
      <Row>
        <Col md="12" xl="12" className="col-xlg-12">
          <TimeLine />
        </Col>
      </Row>
    </div>
  );
};

export default FirstDashboard;
