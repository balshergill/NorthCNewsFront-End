import React, { Component } from "react";
import { getComments, postComment, deleteComment } from "../api";
import "../components/css/Comments.css";
import VotesOnComments from "./VotesOnComments.jsx";
import { Link } from "@reach/router";

class PVDComments extends Component {
  state = {
    comments: [],
    isLoading: false,
    body: "",
    article_id: "",
    msg: ""
  };

  render() {
    const { article_id, username } = this.props;
    const { comments, body, msg } = this.state;
    return (
      <div>
        <p className="AddComment"> Add a public comment...</p>
        <form onSubmit={this.handleSubmit}>
          {username === "" ? msg : ""}

          <input
            className="InputBox"
            type="text"
            id="body"
            value={body}
            onChange={this.handleChange}
            placeholder="Type here..."
          />
          <div>
            <button className="Button">Add</button>
          </div>
        </form>
        <div />
        <br />
        <br />
        <br />
        <br />
        <Link to={`../../../api/articles/${article_id}/comments`}>
          <p className="AddComment">Comments</p>
        </Link>
        {comments.length > 0 &&
          comments.map(comment => {
            return (
              <article className="AddBorder" key={comment.comment_id}>
                <h4 className="Authordate">
                  {comment.author ? comment.author : "testauthor"}
                  -- | --
                  {comment.created_at.slice(0, 10)}|
                  {username == comment.author && (
                    <button
                      onClick={() => this.handleDelete(comment.comment_id)}
                      className="DelButton"
                    >
                      Delete my comment
                    </button>
                  )}
                  <div>
                    <br />
                    <VotesOnComments
                      votes={parseInt(comment.votes)}
                      comment_id={comment.comment_id}
                      article_id={article_id}
                      username={username}
                    />
                  </div>
                </h4>
                <section>{comment.body}</section>
              </article>
            );
          })}
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    getComments(article_id).then(comments => {
      this.setState({
        comments: comments,
        isLoading: true
      });
    });
  }
  handleChange = event => {
    const { id, value } = event.target;

    this.setState(() => ({
      [id]: value
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { username, article_id } = this.props;
    const { id } = event.target;

    if (username !== "" && username !== undefined) {
      this.setState({ msg: "" });
      postComment(username, article_id, body).then(comment => {
        comment.author = username;
        this.setState({
          comments: [comment, ...this.state.comments],
          [id]: "",
          body: ""
        });
      });
    } else {
      alert("You must be logged in to add a comment!");
      // this.setState({
      //   msg: <div>You must be logged in to add a comment!</div>
      // });
    }
  };

  handleDelete = commentId => {
    const { article_id } = this.props;
    deleteComment(article_id, commentId)
      .then(() => {
        return getComments(article_id);
      })
      .then(comments => {
        this.setState({
          comments: comments,
          isLoading: true
        });
      });
  };
}

export default PVDComments;
