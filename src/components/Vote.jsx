import React, { Component } from "react";
import { getVotes } from "../api.js";

class Vote extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange, username } = this.state;
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.vote(1)} disabled={voteChange === 1}>
          ⇧
        </button>
        <p>Votes: {votes + voteChange} </p>
        <button onClick={() => this.vote(-1)} disabled={voteChange === -1}>
          ⇩
        </button>
      </div>
    );
  }
  vote = inc_votes => {
    const { id } = this.props;
    getVotes(inc_votes, id).then(article => {
      this.setState({ voteChange: article.votes + inc_votes });
    });
  };
}

export default Vote;
