import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApprovedPosts } from "../../redux/post/Action";
import { Row, Col, Card, CardBody} from "reactstrap";
import {
  TimeLine,
} from "../../components/dashboard/index.js";

const FirstDashboard = () => {
  console.log("rest: " + process.env.REACT_APP_REST_API_URI);
  const posts = useSelector((state) => state.postReducer.getApprovedPosts);
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApprovedPosts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Мэдлэгийн сан</h1>
        <Row>
          <Col md="12" xl="12" className="col-xlg-12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <div className="profiletimeline">
                      {posts.data.map((post) => (
                        <TimeLine
                          key={post._id}
                          id={post._id}
                          context={post.context}
                          claps={post.clapsNumber}
                          date={post.createdAt}
                          title={post.title}
                        />
                      ))}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FirstDashboard;
