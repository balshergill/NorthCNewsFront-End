import axios from "axios";

const mainURL = "https://balsnewsnc.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${mainURL}/topics`);
  return data.topics;
};

export const getArticles = async () => {
  const { data } = await axios.get(`${mainURL}/articles`);
  return data.articles;
};

export const getUser = async username => {
  const { data } = await axios.get(`${mainURL}/users/${username}`);
  return data;
};

export const getArticlesById = async article_id => {
  const { data } = await axios.get(`${mainURL}/articles/${article_id}`);
  return data.article;
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${mainURL}/articles/${article_id}/comments`
  );
  console.log(data.comments);
  return data.comments;
};
export const postComment = async (article_id, commentToPost) => {
  const { data } = await axios.post(
    `${mainURL}/articles/${article_id}/comments`,
    commentToPost
  );
  console.log(data);
  return data.comment;
};

export const deleteComment = (article_id, commentId) => {
  return axios.delete(`${mainURL}/comments/${commentId}`).then(({ data }) => {
    return data;
  });
};

export const getVotes = async (inc_votes, article_id) => {
  const { data } = await axios.patch(`${mainURL}/articles/${article_id}`, {
    inc_votes
  });
  return data.updatedArticle[0];
};

export const changeVoteOnComment = async (inc_votes, comment_id) => {
  const { data } = await axios.patch(`${mainURL}/comments/${comment_id}`, {
    inc_votes: `${inc_votes}`
  });
  return data.updatedComment[0];
};
