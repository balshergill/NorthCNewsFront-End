import React, { Component } from "react";
import { getComments } from "../api.js";
import "../components/css/Comments.css";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { article_id } = this.props;
    const { comments } = this.state;
    console.log(comments);
    return (
      <div>
        <p>
          {comments.map(comment => {
            return (
              <div className="AddBorder">
                <p>{comment.body}</p>
                <p className="Author">by {comment.author}</p>
              </div>
            );
          })}
        </p>
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchComments(article_id);
  }

  fetchComments = article_id => {
    getComments(article_id).then(comments => {
      console.log(comments);
      this.setState({ comments });
    });
  };
}

export default Comments;
