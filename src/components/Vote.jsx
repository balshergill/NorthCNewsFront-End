import React, { Component } from "react";
import { getVotes } from "../api.js";

class Vote extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes, username } = this.props;
    const { voteChange } = this.state;
    if (username === "jessjelly") {
      return (
        <div>
          <button
            className="VoteBtn"
            onClick={() => this.vote(1)}
            disabled={voteChange === 1}
          >
            ⇧
          </button>
          <p>Votes: {votes + voteChange} </p>
          <button
            className="VoteBtn"
            onClick={() => this.vote(-1)}
            disabled={voteChange === -1}
          >
            ⇩
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
  vote = inc_votes => {
    const { id } = this.props;
    getVotes(inc_votes, id).then(article => {
      this.setState({ voteChange: article.votes + inc_votes });
    });
  };
}

export default Vote;
