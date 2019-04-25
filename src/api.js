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
};

export const getArticlesById = async article_id => {
  const { data } = await axios.get(`${mainURL}/articles/${article_id}`);
  return data.article;
};

export const getVotes = async (inc_votes, article_id) => {
  const { data } = await axios.patch(`${mainURL}/articles/${article_id}`, {
    inc_votes
  });
  console.log(data.updatedArticle[0]);
  return data.updatedArticle[0];
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${mainURL}/articles/${article_id}/comments`
  );
  console.log(data);
  return data.comments;
};
