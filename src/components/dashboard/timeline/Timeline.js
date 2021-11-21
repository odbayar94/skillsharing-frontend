import React from 'react';

import defaultpro from '../../../assets/images/users/1.jpg';

const TimeLine = ({date, title, context, comments, claps,id}) => {
const link = "/post/" + id
    return (
      <div className="feed-post">
        <div className="d-flex">
          <div>
            <img
              src={defaultpro}
              alt="user"
              className="rounded-circle"
              width="40"
            />
          </div>
          <div className="ml-3">
            <div>
              <a href={link} className="link">
                {title}{" "}
              </a>
              <span className="font-12 ml-2 text-muted">{date}</span>
              <div
                className="post__description mt-2"
                dangerouslySetInnerHTML={{ __html: context }}
              />
            </div>
            <div className="like-comm m-t-20">
              <i className="fa fa-heart text-danger" /> {claps} таалагдсан
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
