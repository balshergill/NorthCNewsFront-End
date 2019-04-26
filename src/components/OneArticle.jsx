import React, { Component } from "react";
import "../App.css";
import "./css/OneArticle.css";
import Vote from "../components/Vote.jsx";
import PVDComments from "../components/PVDComments.jsx";
import { navigate, Link } from "@reach/router";

class OneArticle extends Component {
  render() {
    const { articles, article_id, user } = this.props;
    const articleRequested = articles.filter(function(article) {
      return article.article_id == article_id;
    });
    return (
      <div>
        <table align="center" width="80%" className="OneArticle">
          <tr height="100%">
            <td width="10%" valign="top">
              <Vote
                votes={articleRequested[0] ? articleRequested[0].votes : null}
                id={article_id}
                user={user}
              />
            </td>
            <td width="90%" align="left" valign="top">
              <p className="BoldTitle">
                {articleRequested[0] ? articleRequested[0].title : null}
              </p>
              <p>{articleRequested[0] ? articleRequested[0].body : null}</p>
              <br />
              <td>
                <PVDComments article_id={article_id} />
                <br />
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
