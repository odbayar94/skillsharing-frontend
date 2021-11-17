import React, { useState } from 'react';
import classnames from 'classnames';
import {
    Row,
    Col,
    Card,
    CardBody,
   
} from 'reactstrap';

import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/big/img1.jpg';
import img3 from '../../../assets/images/big/img2.jpg';
import img4 from '../../../assets/images/big/img3.jpg';
import img5 from '../../../assets/images/big/img5.jpg';
import img6 from '../../../assets/images/users/2.jpg';
import img7 from '../../../assets/images/users/3.jpg';
import img8 from '../../../assets/images/users/4.jpg';

const TimeLine = () => {

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-1                                                            */
        /*--------------------------------------------------------------------------------*/
        <Card>
           
            <CardBody>
               
                        <Row>
                            <Col sm="12">
                                <div className="profiletimeline">
                                    <div>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={img1}
                                                    alt="user"
                                                    className="rounded-circle"
                                                    width="40"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <a href="/" className="link">
                                                    John Doe
                          </a>
                                                <span className="font-12 ml-2 text-muted">
                                                    5 minutes ago
                          </span>
                                                <p>
                                                    assign a new task <a href="/"> Design weblayout</a>
                                                </p>
                                                <Row>
                                                    <Col lg="3" md="6" className="mb-3">
                                                        <img
                                                            src={img2}
                                                            alt="user"
                                                            className="img-fluid rounded"
                                                        />
                                                    </Col>
                                                    <Col lg="3" md="6" className="mb-3">
                                                        <img
                                                            src={img3}
                                                            alt="user"
                                                            className="img-fluid rounded"
                                                        />
                                                    </Col>
                                                    <Col lg="3" md="6" className="mb-3">
                                                        <img
                                                            src={img4}
                                                            alt="user"
                                                            className="img-fluid rounded"
                                                        />
                                                    </Col>
                                                    <Col lg="3" md="6" className="mb-3">
                                                        <img
                                                            src={img5}
                                                            alt="user"
                                                            className="img-fluid rounded"
                                                        />
                                                    </Col>
                                                </Row>
                                                <div className="like-comm">
                                                    <a href="/" className="link mr-2">
                                                        2 comment
                            </a>
                                                    <a href="/" className="link mr-2">
                                                        <i className="fa fa-heart text-danger" /> 5 Love
                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={img6}
                                                    alt="user"
                                                    className="rounded-circle"
                                                    width="40"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div>
                                                    <a href="/" className="link">
                                                        John Doe
                            </a>
                                                    <span className="font-12 ml-2 text-muted">
                                                        5 minutes ago
                            </span>
                                                    <Row className="mt-3">
                                                        <Col md="3" xs="12">
                                                            <img
                                                                src={img2}
                                                                alt="user"
                                                                className="img-fluid rounded"
                                                            />
                                                        </Col>
                                                        <Col md="9" xs="12">
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit. Integer nec odio. Praesent
                                                                libero. Sed cursus ante dapibus diam.
                                </p>
                                                            <a
                                                                href="/"
                                                                className="btn btn-success text-white"
                                                            >
                                                                Design weblayout
                                </a>
                                                        </Col>
                                                    </Row>
                                                    <div className="like-comm mt-3">
                                                        <a href="/" className="link mr-2">
                                                            2 comment
                              </a>
                                                        <a href="/" className="link mr-2">
                                                            <i className="fa fa-heart text-danger" /> 5 Love
                              </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={img7}
                                                    alt="user"
                                                    className="rounded-circle"
                                                    width="40"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div>
                                                    <a href="/" className="link">
                                                        John Doe
                            </a>
                                                    <span className="font-12 ml-2 text-muted">
                                                        5 minutes ago
                            </span>
                                                    <p className="mt-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Integer nec odio. Praesent libero. Sed
                                                        cursus ante dapibus diam. Sed nisi. Nulla quis sem
                                                        at nibh elementum imperdiet. Duis sagittis ipsum.
                                                        Praesent mauris. Fusce nec tellus sed augue semper
                            </p>
                                                </div>
                                                <div className="like-comm m-t-20">
                                                    <a href="/" className="link mr-2">
                                                        2 comment
                            </a>
                                                    <a href="/" className="link mr-2">
                                                        <i className="fa fa-heart text-danger" /> 5 Love
                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={img8}
                                                    alt="user"
                                                    className="rounded-circle"
                                                    width="40"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div>
                                                    <a href="/" className="link">
                                                        John Doe
                            </a>
                                                    <span className="font-12 ml-2 text-muted">
                                                        5 minutes ago
                            </span>
                                                    <blockquote className="blockquote font-14 mt-2">
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit, sed do eiusmod tempor incididunt
                            </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                
            </CardBody>
        </Card>
    );
}

export default TimeLine;
