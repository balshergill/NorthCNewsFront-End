import React, { Component } from "react";
import "../App.css";

class UserLogin extends Component {
  _isMounted = false;

  state = {
    username: "",
    loginUserName: ""
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    const { loginUserName } = nextProps;
    if (loginUserName !== "" && loginUserName !== undefined) {
      this.setState({ username: "" });
    }
  }

  componentWillUpdate(nextProps, nextState) {}

  render() {
    return (
      <div className="Auth">
        <form className="login-form">
          {this.props.loginUserName !== "" ? (
            <div>
              <h2>Welcome {this.props.loginUserName}!</h2>
              <button
                onClick={this.props.handleLogout}
                id="button"
                type="submit"
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <div>
              <h2>Please Login to your account</h2>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={e => {
                  this.setState({ username: e.target.value });
                }}
                placeholder="eg username jessjelly"
              />
              <button
                id="button1"
                type="submit"
                onClick={e => {
                  this.props.handleLogin(e, this.state.username);
                }}
              >
                Log in
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default UserLogin;
