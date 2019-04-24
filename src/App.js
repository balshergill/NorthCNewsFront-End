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

import * as api from "./api";

class App extends Component {
  state = {
    topics: [],
    articles: [],
    user: null,
    loginFailed: false,
    isLoading: false
  };
  render() {
    const { articles, topics, isLoading, user, loginFailed } = this.state;
    if (isLoading) return <h2>Loading......</h2>;
    return (
      <div className="App">
        <Header />
        <UserLogin login={this.login} user={user} />
        <Navbar className="Navbar" topics={topics} articles={articles} />
        <Router className="Main">
          <Home path="/" />
          <Articles path="/api/articles" />
          <Topics path="api/topics" topics={topics} />
          <OneArticle path="api/articles/:article_id" articles={articles} />
        </Router>
        <Footer />
      </div>
    );
  }

  login = username => {
    api.getUser(username).then(username => {
      console.log(username);
      this.setState({ user: username });
    });
  };

  componentDidMount() {
    this.fetchTopics();
    this.fetchArticles();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      console.log(topics);
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
