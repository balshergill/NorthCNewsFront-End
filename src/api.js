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
  return data.comments;
};

export const postComment = async (username, article_id, commentToPost) => {
  const { data } = await axios.post(
    `${mainURL}/articles/${article_id}/comments`,
    { author: username, body: commentToPost }
  );
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

export const saveLocalStorage = json_user_details => {
  try {
    if (json_user_details !== undefined && json_user_details !== "") {
      let json_user_details_json = JSON.stringify(json_user_details);
      localStorage.setItem("userData", json_user_details_json);
      return true;
    } else {
      return false;
    }
  } catch (err) {}
  return false;
};

export const getLocalStorage = () => {
  let userData = localStorage.getItem("userData");
  let myObject = false;
  try {
    if (userData !== undefined) {
      myObject = JSON.parse(userData);
    }
  } catch (err) {}

  return myObject;
};

export const removeLocalStorage = () => {
  localStorage.removeItem("userData");
  return true;
};
