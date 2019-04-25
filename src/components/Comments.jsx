import React, { Component } from "react";
import { getComments } from "../api.js";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { article_id } = this.props;
    const { comments } = this.state;
    return <div>{/* <p>{comments[0] ? comments[0] : null}</p> */}</div>;
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
