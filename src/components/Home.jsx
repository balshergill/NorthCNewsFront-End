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
        <p>WELCOME TO NORTHCODERS NEWS! </p>
        <p>
          Northcoders News is a social news aggregation, web content rating, and
          discussion website.
        </p>
        <HomeArticles />
      </div>
    );
  }
}

export default Home;

//Display the most highly voted articles?
