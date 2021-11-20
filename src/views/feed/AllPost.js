import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/post/Action";

import axios from "axios";
import "./AllPost.css";


function AllPost() {
const posts = useSelector((state) => state.postReducer.getApprovedPosts);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getAllPosts());
}, [dispatch]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>
            {" "}
            React <span> wysiwyg </span> text editor{" "}
          </h1>
          <Link to="/Add" className="btn btn__theme btn__add">
            {" "}
            Create New{" "}
          </Link>

          {posts.data.map((item, index) => (
            <div className="post__list" key={index}>
              <h2>{item.title}</h2>

              <div
                className="post__description"
                dangerouslySetInnerHTML={{ __html: item.context }}
              />
              <Link to={`/Edit/${item.id}`} className="btn btn__theme">
                {" "}
                Edit{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllPost;
