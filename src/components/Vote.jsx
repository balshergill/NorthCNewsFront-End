import React, { Component } from "react";
import { getVotes } from "../api.js";

class Vote extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <button onClick={() => this.vote(1)}>Vote Up</button>
        <p>VOTES: {votes + voteChange} </p>
        <button onClick={() => this.vote(-1)}>Vote Down</button>
      </div>
    );
  }
  vote = inc_votes => {
    const { id } = this.props;
    getVotes(inc_votes, id).then(article => {
      this.setState({ voteChange: inc_votes });
    });
  };
}

export default Vote;
