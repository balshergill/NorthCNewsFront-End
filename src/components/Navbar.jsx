import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";

class Navbar extends Component {
  render() {
    const { users, topics } = this.props;
    return (
      <nav className="navbar">
        <Link to="/users">Users </Link>
        <Link to="/topics"> Topics </Link>
        <Link to="/articles"> Articles </Link>
      </nav>
    );
  }
}

export default Navbar;
