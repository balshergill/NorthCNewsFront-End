import React, { Component } from "react";
import "../App.css";
import { getTopics } from "../api.js";

class Topics extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="Main">
        {topics.map(({ slug, description }) => {
          return (
            <li className="FontColorBlack">
              {slug} ---------- {description}
            </li>
          );
        })}
      </div>
    );
  }

  //<div articles={articles}>Articles</div>

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      console.log(topics);
      this.setState({ topics });
    });
  };
}

export default Topics;

// - The articles in order of votes for a particular topic ?
