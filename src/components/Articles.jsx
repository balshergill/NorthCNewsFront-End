import React, { Component } from "react";
import "../App.css";

class Articles extends Component {
  render() {
    const { articles } = this.props;
    return (
      <nav class="articles">
        <div>Articles</div>
      </nav>
    );
  }
}

export default Articles;
