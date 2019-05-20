import React from "react";
import { Link } from "@reach/router";

const Error = props => {
  const { error, code, from, key, message } = props;
  console.log(error, "errroooorrrrrr");
  return (
    <main>
      <h1>Oops!!</h1>
      <h2>Something went wrong.</h2>
      <p>Please go to the Homepage and try again..</p>
      <Link to="/">
        <button className="button">Go Home</button>
      </Link>
    </main>
  );
};

export default Error;

// import React from "react";

// const Error = props => {
//   const { code, from, key, message } = props.location.state;

//   return (
//     <div>
//       <h2>OH NO!! {message}</h2>
//     </div>
//   );
// };

// export default Error;
