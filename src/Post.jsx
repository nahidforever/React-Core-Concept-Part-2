import React from "react";

const Post = ({ post }) => {
  const {title, body} = post;
 
  return (
    <div className="card">
      <h3>Post Title: {title}</h3>
      <p>Post Body: {body}</p>
    </div>
  );
};

export default Post;
