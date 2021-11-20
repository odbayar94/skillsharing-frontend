import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../../redux/dashboard/Action";
import AllPostList from "../../components/dashboard/AllPostList"

import {
  CardBandwidth,
  CardDownload,
} from "../../components/dashboard";

const FirstDashboard = () => {
  
  const dashboard = useSelector((state) => state.dashboardReducer.card);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col lg="6" md="12">
          <CardBandwidth salary={dashboard.salary} month={dashboard.month} />
        </Col>
        <Col lg="6" md="12">
          <CardDownload point={dashboard.point} month={dashboard.month} />
        </Col>
      </Row>
      <Row>
        <Col md="12" xl="12" className="col-xlg-12">
          <AllPostList/>
        </Col>
      </Row>
    </div>
  );
};

export default FirstDashboard;
