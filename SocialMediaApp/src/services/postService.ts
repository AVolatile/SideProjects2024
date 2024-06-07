import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const likePost = async (postId: number) => {
  await axios.post(`${API_URL}/${postId}/like`);
};

const dislikePost = async (postId: number) => {
  await axios.post(`${API_URL}/${postId}/dislike`);
};

export default { getPosts, likePost, dislikePost };
