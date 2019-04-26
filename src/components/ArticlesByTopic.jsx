import React, { Component } from "react";
import { Link } from "@reach/router";
import "../App.css";

class ArticlesByTopic extends Component {
  render() {
    const { topic_slug, articles } = this.props;
    const topicArticlesRequested = articles.filter(function(article) {
      return article.topic == topic_slug;
    });
    const mappedArticles = topicArticlesRequested.map(function(topic) {
      return (
        <div>
          <Link
            to={`../../../../api/articles/${topic.article_id}
          `}
          >
            <p className="ArticleTitle">{topic.title}</p>
            <button className="Btn_more">Read more</button>
          </Link>
          <br />
          <br />
        </div>
      );
    });
    return (
      <div>
        <h2>All Articles About {topic_slug}</h2>
        <br />
        <br />
        <p className="FontColorBlack">
          {mappedArticles ? mappedArticles : null}
        </p>
      </div>
    );
  }
}

export default ArticlesByTopic;
