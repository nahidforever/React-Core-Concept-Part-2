import React, { use } from "react";
import Post from "./Post";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  //  console.log(posts);
  return (
    <div className="card">
      <h3>Posts: {posts.length} </h3>

      {posts.map((post) => (
        <Post key={post.body} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
