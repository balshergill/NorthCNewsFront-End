import React, { Component } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import { Router, Link } from "@reach/router";
import Articles from "../src/components/Articles";
import Topics from "../src/components/Topics";
import Users from "../src/components/Users";
import * as api from "./api";
// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors());

class App extends Component {
  state = {
    articles: [],
    topics: [],
    users: [],
    comments: []
  };
  render() {
    const { articles, users, topics, comments } = this.state;
    return (
      <div className="App">
        <Header />
        <Navbar
          topics={topics}
          users={users}
          articles={articles}
          comments={comments}
        />
        <Router classname="Main">
          <Home
            path="/"
            topics={topics}
            users={users}
            articles={articles}
            comments={comments}
          />
          <Articles path="/api/articles" articles={articles} />
          <Topics path="api/topics" topics={topics} />
          <Users path="api/users" users={users} />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default App;
