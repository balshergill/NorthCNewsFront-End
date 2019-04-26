import React, { Component } from "react";
import { Link } from "@reach/router";
import "../App.css";
import "./css/HomeArticles.css";
import { getArticles } from "../api.js";

const capitaliseFirstLetter = (string, length) => {
  const cap = string.charAt(0).toUpperCase() + string.slice(1);
  return cap.substring(0, length) + "...";
};

class HomeArticles extends Component {
  state = {
    articles: [],
    sorting: ""
  };

  sortOnChange = e => {
    this.setState({ sorting: e.target.value });
  };

  render() {
    const { articles, sorting } = this.state;
    const articles_data = [];
    articles.map(article => {
      article.comment_count_in = parseInt(article.comment_count);
      article.created_atSliced = article.created_at.slice(0, 10);
      return articles_data.push(article);
    });

    articles_data.sort((a, b) => {
      if (sorting === "votes_asc") {
        return parseInt(a.votes) - parseInt(b.votes);
      } else if (sorting === "votes_desc") {
        return parseInt(b.votes) - parseInt(a.votes);
      } else if (sorting === "comment asc") {
        return a.comment_count_in - b.comment_count_in;
      } else if (sorting === "comment_desc") {
        return b.comment_count_in - a.comment_count_in;
      } else if (sorting === "created_at asc") {
        return parseInt(a.created_atSliced) - parseInt(b.created_atSliced);
      } else if (sorting === "created_at desc") {
        return parseInt(b.created_atSliced) - parseInt(a.created_atSliced);
      }
    });

    return (
      <div>
        <div className="ArtStyle">
          <select value={sorting} onChange={this.sortOnChange}>
            <option value="">Sort By</option>
            <option value="votes_asc">votes (Asc) </option>
            <option value="votes_desc">votes (Desc)</option>
            <option value="comment asc">Comments (Asc)</option>
            <option value="comment_desc">Comments (Desc)</option>
            <option value="created_at asc">Date Created (Asc)</option>
            <option value="created_at desc">Date Created(Desc)</option>
          </select>
        </div>

        <div className="articles-container">
          <div className="row1" align="center">
            {articles_data.map(
              ({
                article_id,
                body,
                comment_count,
                created_at,
                title,
                topic,
                username,
                votes
              }) => {
                return (
                  <Link className="card" to={"api/articles/" + article_id}>
                    <div>
                      <p className="title">
                        {capitaliseFirstLetter(title, 150)}
                      </p>
                      <p className="description">
                        {capitaliseFirstLetter(body, 100)}
                      </p>

                      <table className="TableStyle">
                        <tr key="0">
                          <td className="TDVotes">
                            Votes
                            <br />
                            {votes}
                          </td>
                          <td className="TDComments">
                            Comments
                            <br />
                            {comment_count}
                          </td>
                          <td className="TDDate">
                            Date
                            <br />
                            {created_at.slice(0, 10)}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    getArticles().then(articles => {
      console.log(articles);
      this.setState({ articles });
    });
  };
}

export default HomeArticles;
