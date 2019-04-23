import axios from "axios";

export const getTopics = async () => {
  const { data } = await axios.get(
    "https://balsnewsnc.herokuapp.com/api/topics"
  );
  return data.topics;
};
