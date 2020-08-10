import React from "react";
import WithRouterSample from "../components/WithRouterSam";

function Post({ post }) {
  return (
    <div>
      <WithRouterSample />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
