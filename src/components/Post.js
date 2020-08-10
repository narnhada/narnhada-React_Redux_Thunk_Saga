import React from "react";
import WithRouterSample from "./WithRouterSam";

function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <WithRouterSample />
    </>
  );
}

export default Post;
