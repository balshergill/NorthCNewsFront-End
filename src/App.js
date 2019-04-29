import React, { Component } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import { Router } from "@reach/router";
import Articles from "../src/components/Articles";
import Topics from "../src/components/Topics";
import OneArticle from "../src/components/OneArticle";
import ArticlesByTopic from "../src/components/ArticlesByTopic";
import PVDComments from "../src/components/PVDComments.jsx";
import Error from "../src/components/Error.jsx";

import * as api from "./api";

class App extends Component {
  state = {
    topics: [],
    articles: [],
    username: "",
    isLoading: false
  };
  render() {
    const { articles, topics, isLoading, username } = this.state;
    if (isLoading) return <h2>Loading......</h2>;
    return (
      <div className="App">
        <div className="Auth">
          <form className="login-form" onSubmit={this.handleLogin}>
            {username === "jessjelly" ? (
              <div>
                <h2>Welcome {username}!</h2>
                <button onClick={this.handleLogout} id="button" type="submit">
                  LOG OUT
                </button>
              </div>
            ) : (
              <div>
                <h2>Please Login to your account</h2>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                <button id="button" type="submit">
                  Log in
                </button>
              </div>
            )}
          </form>
        </div>
        <Header />
        <Navbar className="Navbar" topics={topics} articles={articles} />
        <Router className="Main">
          <Home path="/" articles={articles} topics={topics} />
          <Articles path="/api/articles" />
          <Topics path="api/topics" topics={topics} />
          <OneArticle
            path="api/articles/:article_id"
            articles={articles}
            username={username}
          />
          <ArticlesByTopic
            path="api/topics/:topic_slug/articles"
            topics={topics}
            articles={articles}
          />
          <ArticlesByTopic
            path="api/articles/:article_id"
            topics={topics}
            articles={articles}
          />
          <PVDComments
            path="/api/comments/:comment_id"
            articles={articles}
            username={username}
          />
          <PVDComments
            path="/api/articles/:article_id/comments"
            articles={articles}
            username={username}
          />

          <Error path="/*" />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
    this.fetchArticles();
    this.login();
  }

  login = user => {
    api.getUser(user).then(user => {
      this.setState({ username: user });
    });
  };

  logout = username => {
    this.setState({ username: "" });
  };

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
  fetchArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
  handleLogin = event => {
    event.preventDefault();
    const { username } = this.state;
    const { login } = this.props;
    login(username);
  };

  handleChange = ({ target }) => {
    console.log(target.value);
    this.setState({ username: target.value });
  };

  handleLogout = event => {
    event.preventDefault();
    const { username } = this.state;
    this.setState({ username: "" });
  };
}

export default App;
