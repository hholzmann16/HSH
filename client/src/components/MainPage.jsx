import React from "react";
import Main from "../../dist/main.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h1 className={Main.title}>
            Hannah Sophie Holzmann's Official Website
          </h1>
          <div className={Main.container}>
            <div className={Main.buttonContainer}>
              <button className={Main.button}>About Me</button>
            </div>
            <div className={Main.buttonContainer}>
              <button className={Main.button}>Resume</button>
            </div>
            <div className={Main.buttonContainer}>
              <button className={Main.button}>Portfolio</button>
            </div>
            <div className={Main.buttonContainer}>
              <button className={Main.button}>Blog</button>
            </div>
            <div className={Main.buttonContainer}>
              <button className={Main.button}>Contact</button>
            </div>
          </div>
          <marquee>
            <h2 style={{ color: "#f442eb" }}> Hello World</h2>
          </marquee>
        </div>
      </div>
    );
  }
}

export default MainPage;
