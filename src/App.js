import React, { Component } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import { Router } from "@reach/router";
import HomeArticles from "../src/components/HomeArticles";
import OneArticle from "../src/components/OneArticle";
import ArticlesByTopic from "../src/components/ArticlesByTopic";
import UserLogin from "../src/components/UserLogin";
import PVDComments from "../src/components/PVDComments.jsx";
import Error from "../src/components/Error.jsx";

import * as api from "./api";

class App extends Component {
  state = {
    topics: [],
    articles: [],
    username: "",
    loginUserName: "",
    isLoading: false
    // error: null
  };

  componentDidMount() {
    this.fetchTopics();
    this.fetchArticles();
    this.checkLoggedInUser();
  }

  checkLoggedInUser = () => {
    const ls = api.getLocalStorage();
    if (ls) {
      this.setState({ loginUserName: ls.user.username });
    } else {
      this.setState({ loginUserName: "" });
    }
  };

  login = user => {
    api.getUser(user).then(userdata => {
      if (
        userdata !== undefined &&
        userdata !== "" &&
        userdata.user !== undefined &&
        userdata.user !== ""
      ) {
        api.saveLocalStorage(userdata);
        this.setState({ username: userdata.user.username });
        this.checkLoggedInUser();
      } else {
        console.log("Login Failed");
      }
    });
    // .catch(err => {
    //   navigate("/error", {
    //     replace: true,
    //     state: {
    //       code: err.code,
    //       message: err.message,
    //       from: "/articles"
    //     }
    //   });
    // });
  };

  logout = username => {};

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

  handleLogin = (event, in_user_name = "") => {
    event.preventDefault();
    const { username } = this.state;
    if (in_user_name === "") {
      return this.login(username);
    } else {
      return this.login(in_user_name);
    }
  };

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleLogout = event => {
    event.preventDefault();
    this.setState({ username: "" });
    api.removeLocalStorage();
    this.setState({ loginUserName: "", username: "" });
  };

  render() {
    const { articles, topics, isLoading, loginUserName, error } = this.state;

    if (isLoading) return <h2>Loading......</h2>;
    return (
      <div className="App">
        <div className="Auth">
          <form
            name="user__name"
            className="login-form"
            onSubmit={this.handleLogin}
          >
            {loginUserName !== "" ? (
              <div>
                <h2>Welcome {loginUserName}!</h2>
                <button onClick={this.handleLogout} id="button" type="submit">
                  LOG OUT
                </button>
              </div>
            ) : (
              <div>
                <h2>Please Login to your account</h2>
                <input
                  type="text"
                  name="user__name"
                  onChange={this.handleChange}
                  placeholder="Enter username..."
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
          <HomeArticles path="/api/articles" />
          <OneArticle
            path="api/articles/:article_id"
            articles={articles}
            username={loginUserName}
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
            path="/api/articles/:article_id/comments"
            articles={articles}
            username={loginUserName}
          />
          <PVDComments
            path="/api/comments/:comment_id"
            articles={articles}
            username={loginUserName}
          />
          <PVDComments path="/api/comments/:comment_id" articles={articles} />
          <UserLogin
            path="/api/users/:username"
            value={this.state.username}
            onChange={this.handleChange}
            loginUserName={loginUserName}
            handleLogout={this.handleLogout}
            handleLogin={this.handleLogin}
          />
          <Error path="/*" error={error} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
