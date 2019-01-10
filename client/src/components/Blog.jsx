import React from "react";
import axios from "axios";
import BlogEntry from "./BlogEntry.jsx";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    };
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios
      .get("/api/")
      .then(res => {
        const blogPosts = res.data;
        this.setState({ blogPosts });
      })
      .catch(err => {
        console.log("error receiving blog posts", err);
      });
  }

  render() {
    let blogRender = <p>No blogs at this time :)</p>;
    if (this.state.blogPosts.length > 0) {
      blogRender = this.state.blogPosts.map(entry => {
        return (
          <BlogEntry
            title={entry.title}
            summary={entry.summary}
            id={entry.id}
            key={entry.id}
          />
        );
      });
    }

    return (
      <div className="row">
        <div className="col">
          <div>{blogRender}</div>
        </div>
      </div>
    );
  }
}

export default Blog;
