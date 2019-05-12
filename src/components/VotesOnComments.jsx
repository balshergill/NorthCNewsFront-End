import React, { Component } from "react";
import { changeVoteOnComment } from "../api.js";
import "../App.css";

class VotesOnComments extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes, username } = this.props;
    const { voteChange } = this.state;
    console.log(votes, "in voteson comments");
    return (
      <div>
        <button
          className="VoteBtn"
          onClick={() => this.handleVoteChange(1)}
          disabled={voteChange === 1}
        >
          ⇧
        </button>
        <span> Votes: {votes + voteChange} </span>
        <button
          className="VoteBtn"
          onClick={() => this.handleVoteChange(-1)}
          disabled={voteChange === -1}
        >
          ⇩
        </button>
      </div>
    );
  }
  handleVoteChange = inc_votes => {
    const { comment_id } = this.props;
    changeVoteOnComment(inc_votes, comment_id).then(comment => {
      console.log(comment, "comment");
      this.setState({ voteChange: 0 + inc_votes });
    });
  };
}
export default VotesOnComments;
