import React from "react";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hannah Sophie Holzmann's Official Website</h1>
        <marquee>
          <h2 style={{ color: "#f442eb" }}> Hello World</h2>
        </marquee>
      </div>
    );
  }
}

export default MainPage;
