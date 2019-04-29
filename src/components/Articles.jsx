import React, { Component } from "react";
import "../App.css";
import { getArticles } from "../api.js";
import HomeArticles from "./HomeArticles";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div>
        <HomeArticles />
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

export default Articles;
