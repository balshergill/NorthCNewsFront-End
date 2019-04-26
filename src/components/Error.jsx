import React from "react";
import { Router, Link } from "@reach/router";

const Error = () => {
  return (
    <main>
      <h1>Oops!!</h1>
      <h2>Something went wrong.</h2>
      <p>Please go to the Homepage and try again...</p>
      <Link to="/">
        <button className="button">Go Home</button>
      </Link>
    </main>
  );
};

export default Error;
