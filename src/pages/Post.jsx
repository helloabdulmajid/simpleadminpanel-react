import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
console.log('mmm',id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
        //   console.log(response.data.body)
      });
  },[id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card-body">
              <h3>
                User Id : {post.userId} and Post id is {post.id}
              </h3>
              <h5 className="card-title">{post.title} </h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
