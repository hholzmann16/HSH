import React from "react";
import Main from "../../dist/main.css";
import Nav from "../../dist/nav.css";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar.jsx";
import img from "../../assets/Hannah.jpg";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
          <div
            className={`d-flex align-items-center justify-content-center ${
              Main.banner
            }`}
          >
            <h1 className={`text-center align-middle ${Main.hannah}`}>
              Hannah Holzmann
            </h1>
          </div>
          <div className="text-center">
            <img src={img} className={`img rounded-circle ${Main.avatar}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
