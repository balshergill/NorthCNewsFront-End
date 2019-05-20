import React, { Component } from "react";
import { Link } from "@reach/router";
import "../App.css";
import "../components/css/Navbar.css";

export const capitalizeFirstLetter = string => {
  if (string == null) {
    return "";
  }
  if (string === undefined) {
    return "";
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

class Navbar extends Component {
  state = {
    topics: [],
    comments: []
  };

  render() {
    const { articles, topics } = this.props;

    return (
      <div className="navbarmain Navbar">
        <nav className="link">
          <button className="buttonNavbar">
            <Link to="/">Homepage</Link>
          </button>
          {topics.map(topic => {
            return (
              <span className="dropdown">
                <button className="dropbtn">
                  <Link
                    to={`api/topics/${topic.slug}/articles`}
                  >{`${capitalizeFirstLetter(topic.slug)}`}</Link>
                  {articles.map(article => {
                    return article.topic === topic.slug;
                  }).length > 0 ? (
                    <span className="dropdown-content">
                      {articles.map(article => {
                        return article.topic === topic.slug ? (
                          <li key={article.title}>
                            <Link to={`api/articles/${article.article_id}`}>{`${
                              article.title
                            }`}</Link>
                          </li>
                        ) : (
                          ""
                        );
                      })}
                    </span>
                  ) : (
                    ""
                  )}
                </button>
              </span>
            );
          })}

          <button className="buttonNavbar">
            <Link to="api/users/:username">Register/Login</Link>
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
