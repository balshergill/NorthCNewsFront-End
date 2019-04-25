import React, { Component } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import { Router, Link } from "@reach/router";
import Articles from "../src/components/Articles";
import Topics from "../src/components/Topics";
import UserLogin from "./components/UserLogin";
import OneArticle from "../src/components/OneArticle";
import ArticlesByTopic from "../src/components/ArticlesByTopic";
import Comments from "../src/components/Comments";

import * as api from "./api";

class App extends Component {
  state = {
    topics: [],
    articles: [],
    comments: [],
    user: null,
    loginFailed: false,
    isLoading: false
  };
  render() {
    const {
      articles,
      topics,
      isLoading,
      user,
      comments,
      loginFailed
    } = this.state;
    if (isLoading) return <h2>Loading......</h2>;
    return (
      <div className="App">
        <Header />
        <UserLogin login={this.login} user={user} />
        <Navbar className="Navbar" topics={topics} articles={articles} />
        <Router className="Main">
          <Home path="/" articles={articles} topics={topics} />
          <Articles path="/api/articles" />
          <Topics path="api/topics" topics={topics} />
          <OneArticle path="api/articles/:article_id" articles={articles} />
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
          <UserLogin path="api/users/:username" />
          <Comments
            path="/api/articles/:article_id/comments"
            articles={articles}
            comments={comments}
          />
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

  login = username => {
    api.getUser(username).then(username => {
      console.log(username);
      this.setState({ user: username });
    });
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
}

export default App;
