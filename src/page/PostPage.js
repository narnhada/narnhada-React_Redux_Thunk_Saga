import React from "react";
import PostCointainer from "../containers/PostContainer";

function PostPage({ match }) {
  const { id } = match.params;

  return <PostCointainer postId={parseInt(id, 10)} />;
}

export default PostPage;
