import React, { Component } from "react";
import "../App.css";

class OneArticle extends Component {
  render() {
    const { articles, article_id } = this.props;
    let articleRequested = articles.filter(function(article) {
      return article.article_id == article_id;
    });
    console.log(articleRequested[0]);
    return (
      <ul className="oneArticle">
        <li>{articleRequested[0]}</li>
      </ul>
    );
  }
}

export default OneArticle;

// {
//   articles.map(article => (
//     <li>{article.title}</li>
//   ))
// }

// - the article page with ID - what should this have on it ?
//   - The ability to vote, the comments below, the ability to add comments.
