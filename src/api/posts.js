import axios from "axios";
//   "proxy": "http://localhost:4000"

export const getPosts = async () => {
  const response = await axios.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
