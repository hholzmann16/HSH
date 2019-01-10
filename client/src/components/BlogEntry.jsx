import React from "react";
import blogStyle from "../../dist/blogStyle.css";

function BlogEntry(props) {
  return (
    <div className="row">
      <div className="col">
        <div className={`mx-auto ${blogStyle.box}`}>
          <h2 className="text-center">{props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.summary }} />
        </div>
      </div>
    </div>
  );
}

export default BlogEntry;
