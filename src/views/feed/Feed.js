import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/Action";

import { Row, Col, Card, CardBody } from "reactstrap";
import {
  TimeLine,
} from "../../components/dashboard/index.js";



const FirstDashboard = () => {
  //  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loginUser());
  // }, [dispatch]);

  const context = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio Praesent libero. Sed cursus ante dapibus diam."
  const comments = 2;
  const claps = 10;
  const date = "5 min ago";
  const title = "Энэ бол гарчиг";

  return (
    <div>
      <Row>
        <Col md="12" xl="12" className="col-xlg-12">
          <Card>
            <CardBody>
              <Row>
                <Col sm="12">
                  <div className="profiletimeline">
                    <TimeLine
                      context={context}
                      comments={comments}
                      claps={claps}
                      date={date}
                      title={title}
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FirstDashboard;
