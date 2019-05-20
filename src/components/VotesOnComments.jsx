import React, { Component } from "react";
import { changeVoteOnComment } from "../api.js";
import "../App.css";

class VotesOnComments extends Component {
  state = {
    voteChange: 0,
    msg: ""
  };

  render() {
    const { votes, username } = this.props;
    const { voteChange, msg } = this.state;
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
        {username === "" ? msg : ""}
      </div>
    );
  }
  handleVoteChange = inc_votes => {
    const { comment_id, username, votes } = this.props;
    if (username !== "" && username !== undefined) {
      this.setState({ msg: "" });
      changeVoteOnComment(inc_votes, comment_id).then(comment => {
        const v = comment.votes - votes;
        this.setState({ voteChange: 0 + v });
      });
    } else {
      alert("You must be logged in to vote on a comment!");
      // this.setState({
      //   msg: <div>You must be logged in to vote on a comment</div>
      // });
    }
  };
}
export default VotesOnComments;
