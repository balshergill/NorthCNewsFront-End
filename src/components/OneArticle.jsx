import React from "react";
import "../App.css";
import "./css/OneArticle.css";
import Vote from "../components/Vote.jsx";
import PVDComments from "../components/PVDComments.jsx";

const OneArticle = props => {
  const { articles, article_id, username } = props;
  const articleRequested = articles.filter(function(article) {
    return article.article_id == article_id;
  });

  return (
    <div className="oneArticleBackground">
      <table align="center" width="80%" className="OneArticle">
        <tbody>
          <tr height="100%">
            <td width="10%" valign="top">
              <Vote
                votes={articleRequested[0] ? articleRequested[0].votes : null}
                id={article_id}
                username={username}
              />
            </td>
            <td width="90%" align="left" valign="top">
              <p className="BoldTitle">
                {articleRequested[0] ? articleRequested[0].title : null}
              </p>
              <p>{articleRequested[0] ? articleRequested[0].body : null}</p>
              <br />
              <td>
                <PVDComments article_id={article_id} username={username} />
                <br />
              </td>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OneArticle;
