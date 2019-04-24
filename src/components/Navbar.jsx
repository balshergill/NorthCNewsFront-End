import React, { Component } from "react";
import { Link } from "@reach/router";
import "../App.css";
import { getArticles } from "../api.js";
import "../components/css/Navbar.css";

class Navbar extends Component {
  state = {
    articles: [],
    topics: [],
    users: [],
    comments: []
  };

  render() {
    const { articles, users, topics } = this.props;

    return (
      <div className="navbarmain Navbar">
        <nav className="link">
          <button className="buttonNavbar">
            <Link to="/">HOME</Link>
          </button>
          <span className="dropdown">
            <button className="dropbtn" id="button-drop">
              Topics
              <span className="dropdown-content">
                {topics.map(topic => {
                  return (
                    <li key={topic.slug}>
                      <Link to={`api/topics/${topic.slug}/articles`}>{`${
                        topic.slug
                      }`}</Link>
                    </li>
                  );
                })}
              </span>
            </button>
          </span>
          <span className="dropdown">
            <button className="dropbtn" id="button-drop">
              Articles
              <span className="dropdown-content">
                {articles.map(article => {
                  return (
                    <li key={article.title}>
                      <Link to={`api/articles/${article.article_id}`}>{`${
                        article.title
                      }`}</Link>
                    </li>
                  );
                })}
              </span>
            </button>
          </span>
          <button className="buttonNavbar">
            <Link to="/users">Users</Link>
          </button>
          <button className="buttonNavbar">
            <Link to="/articles/post_article">Add article</Link>
          </button>
        </nav>
      </div>
    );
  }
  fetchArticles = () => {
    getArticles().then(articles => {
      this.setState({ articles });
    });
    // componentDidMount() {
    //   this.fetchArticles();
    // }
  };
}

export default Navbar;
