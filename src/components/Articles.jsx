import React, { Component } from "react";
import "../App.css";
import { getArticles } from "../api.js";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="Main">
        {articles.map(({ title }) => {
          return <ul>{title}</ul>;
        })}
      </div>
    );
  }

  //<div articles={articles}>Articles</div>

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
