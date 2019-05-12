import React, { Component } from "react";
import { getVotes } from "../api.js";

class Vote extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes, username } = this.props;
    const { voteChange } = this.state;
    console.log(votes);
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
          <p>
            Votes:
            {votes + voteChange}
          </p>
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
    const { id, votes } = this.props;
    const { voteChange } = this.state;
    getVotes(inc_votes, id).then(article => {
      this.setState({ voteChange: 0 + inc_votes });
    });
  };
}

export default Vote;
