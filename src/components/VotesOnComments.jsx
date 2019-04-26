import React, { Component } from "react";
import { changeVoteOnComment } from "../api.js";

class VotesOnComments extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <button
          onClick={() => this.handleVoteChange(1)}
          disabled={voteChange === 1}
        >
          UP
        </button>
        <span> Votes: {votes + voteChange} </span>
        <button
          onClick={() => this.handleVoteChange(-1)}
          disabled={voteChange === -1}
        >
          DOWN
        </button>
      </div>
    );
  }
  handleVoteChange = inc_votes => {
    const { comment_id } = this.props;
    changeVoteOnComment(inc_votes, comment_id).then(comment => {
      console.log(comment, "comment");
      this.setState({ voteChange: comment.votes + inc_votes });
    });
  };
}
export default VotesOnComments;
