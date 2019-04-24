import React, { Component } from "react";
import "../App.css";
import Vote from "../components/Vote.jsx";

class OneArticle extends Component {
  render() {
    const { articles, article_id } = this.props;
    const articleRequested = articles.filter(function(article) {
      return article.article_id == article_id;
    });
    console.log(articleRequested[0]);
    return (
      <ul className="oneArticle">
        <p>{articleRequested[0] ? articleRequested[0].title : null}</p>
        <p>{articleRequested[0] ? articleRequested[0].body : null}</p>
        <Vote
          votes={articleRequested[0] ? articleRequested[0].votes : null}
          id={article_id}
        />
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
