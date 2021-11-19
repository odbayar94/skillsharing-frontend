import React from 'react';
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

import img8 from '../../../assets/images/users/4.jpg';

const TimeLine = ({date, title, context, comments, claps,id}) => {
const link = "post/" + id
    return (
      <div className="feed-post">
        <div className="d-flex">
          <div>
            <img src={img8} alt="user" className="rounded-circle" width="40" />
          </div>
          <div className="ml-3">
            <div>
              <a href="/" className="link">
                {title}{" "}
              </a>
              <span className="font-12 ml-2 text-muted">{date}</span>
              <div
                className="post__description mt-2"
                dangerouslySetInnerHTML={{ __html: context }}
              />
            </div>
            <div className="like-comm m-t-20">
              <i className="fa fa-heart text-danger" /> {claps} claps
              <a href={link} className="link text-success">
                {" "}
                цааш унших
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TimeLine;
