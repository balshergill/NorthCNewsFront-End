import React from "react";
import { Router, Link } from "@reach/router";

const Error = () => {
  return (
    <main className="contentWell">
      <h1>ERROR!</h1>
      <h2>Something went wrong.</h2>
      <p>Please go to the Homepage and try again...</p>
      <Link to="/">
        <button className="button">Go Home</button>
      </Link>
    </main>
  );
};

export default Error;
