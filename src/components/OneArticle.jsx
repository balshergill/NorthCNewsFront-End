import React, { Component } from "react";
import "../App.css";
import "./css/OneArticle.css";
import Vote from "../components/Vote.jsx";
import Comments from "../components/Comments.jsx";
import { navigate, Link } from "@reach/router";

class OneArticle extends Component {
  render() {
    const { articles, article_id } = this.props;
    const articleRequested = articles.filter(function(article) {
      return article.article_id == article_id;
    });
    console.log(articleRequested[0]);
    return (
      <div>
        <table align="center" width="70%" className="OneArticle">
          <tr height="100%">
            <td width="10%" valign="top">
              <Vote
                votes={articleRequested[0] ? articleRequested[0].votes : null}
                id={article_id}
              />
            </td>
            <td width="90%" align="left" valign="top">
              <p className="BoldTitle">
                {articleRequested[0] ? articleRequested[0].title : null}
              </p>
              <p>{articleRequested[0] ? articleRequested[0].body : null}</p>
              <br />
              <Link to={`../../../api/articles/${article_id}/comments`}>
                <td className="ColorBlack">Comments</td>
              </Link>
              <td>
                <Comments article_id={article_id} />
                <br />
                Add Comment (wrap Link to post comment to this once post path
                created)
              </td>
              <br />
            </td>
          </tr>
        </table>
      </div>
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

{
  /* <br />
  <Link to={`../../../api/articles/${article_id}/comments`}>
    <td>Comments</td>
  </Link>
  <td> */
}
