import React from "react";
import { Redirect } from "react-router-dom";

function Post() {
  const status = 404;

  function goToAbt() {
    console.log("hello");
  }

  if (status === 404) {
    return <Redirect to="/notfound" />;
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={goToAbt}>Go to about page</button>
    </div>
  );
}

export default Post;
