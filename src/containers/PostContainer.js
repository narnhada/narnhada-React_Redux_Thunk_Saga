import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { getPost } from "../modules/posts"; // api/getPost자꾸 가져와서 에러났음

function PostCointainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  if (loading && !data) return <div>...로딩중</div>;
  if (error) return <div>...에..ㄹ ㅓ ㅈ ㅜㄱ옂...ㅝ</div>;
  if (!data) return null;

  return <Post post={data} />;
}

export default PostCointainer;
