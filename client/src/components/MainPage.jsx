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
        <div className={Nav.primary}>
          <Navbar />
          <div className={Main.banner} />
          <div className="text-center">
            <img src={img} className={`img rounded-circle ${Main.avatar}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
