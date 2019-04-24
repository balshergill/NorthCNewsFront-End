import React, { Component } from "react";
import "../App.css";

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
      </div>
    );
  }
}

export default Home;

//Display the most highly voted articles?
