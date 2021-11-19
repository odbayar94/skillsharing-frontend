import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/post/Action";

import { Row, Col, Card, CardBody } from "reactstrap";
import {
  TimeLine,
} from "../../components/dashboard/index.js";



const FirstDashboard = () => {
  const posts = useSelector((state) => state.postReducer.allPosts);
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div>
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
                        context={post.context}
                        claps={post.clapsNumber}
                        date={post.createdAt}
                        title={post.title}
                      />
                    ))}
                    {/* <TimeLine
                      context={context}
                      claps={clapsNumber}
                      date={createdAt}
                      title={title}
                    /> */}
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
