import React from "react";
import Construction from "../../assets/ants.gif";

function Blog(props) {
  return (
    <div className="text-center">
      <h1>Under Construction</h1>
      <img style={{ maxWidth: "90vw" }} src={Construction} />
      <p>Making sure it will be at least three times as big!</p>
    </div>
  );
}

export default Blog;
