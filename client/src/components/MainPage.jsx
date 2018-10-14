import React from "react";
import Main from "../../dist/main.css";
import Navbar from "./Navbar.jsx";
import img from "../../assets/Hannah.jpg";
import ResumePage from "./ResumePage.jsx";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentPage: home
    };
  }

  render() {
    return (
      <div>
        -
        <div>
          <Navbar />
          <div className="text-center">
            <img src={img} className={`img rounded-circle ${Main.avatar}`} />
          </div>
        </div>
        <ResumePage />
      </div>
    );
  }
}

export default MainPage;
