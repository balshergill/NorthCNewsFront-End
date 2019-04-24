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
  console.log(data);
  return data;
};

export const getArticlesById = async article_id => {
  const { data } = await axios.get(`${mainURL}/articles/${article_id}`);
  return data.article;
};

// export const getArticleComments = async articleId => {
//   const { data } = await axios.get(`${mainURL}/articles/${articleId}/comments`);
//   return data.comments;
// };
