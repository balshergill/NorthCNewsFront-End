import React, { Component } from "react";
import "../App.css";
import HomeArticles from "./HomeArticles";

class Home extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div>
        <h1>Welcome to North C News!</h1>
        <h2>
          Northcoders News is a social news aggregation, web content rating, and
          discussion website.
        </h2>
        <HomeArticles />
      </div>
    );
  }
}

export default Home;

//Display the most highly voted articles?
