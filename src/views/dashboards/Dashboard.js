import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";

import {
  CardBandwidth,
  CardDownload,
} from "../../components/dashboard";

const FirstDashboard = () => {
  useEffect(()=>{

  },[])
  return (
    <div>
      <Row>
        <Col lg="6" md="12">
          <CardBandwidth salary="51" month="2021-11" />
        </Col>
        <Col lg="6" md="12">
          <CardDownload point="21" month="2021-11" />
        </Col>
      </Row>
      <Row>
        <Col md="12" xl="12" className="col-xlg-12"></Col>
      </Row>
    </div>
  );
};

export default FirstDashboard;
