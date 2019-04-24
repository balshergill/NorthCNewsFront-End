// - a user profile page

import React, { Component } from "react";
import "../App.css";

class UserLogin extends Component {
  state = { username: "" };

  render() {
    const { username } = this.state;
    return (
      <div className="auth">
        <form className="login-form" onSubmit={this.handleSubmit}>
          {this.state.username == "butter_bridge" ? (
            <h2>Welcome {username}!</h2>
          ) : (
            <div>
              <h2>Please Login to your account</h2>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <button id="button" type="submit">
                Log in
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    const { login } = this.props;
    login(username);
  };

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  };
}

export default UserLogin;
