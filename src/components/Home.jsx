import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  //state
  render() {
    return (
      <div>
        <p>WELCOME TO NORTHCODERS NEWS! </p>
        <p>
          Northcoders News is a social news aggregation, web content rating, and
          discussion website.
        </p>
        <button> View Articles </button>
        <button> View Topics </button>
        <button> Add an Article </button>
      </div>
    );
  }
}

export default Home;

//Display the most highly voted articles?
