import React from "react";
import Nav from "../../dist/nav.css";
import Main from "../../dist/main.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-md fixed-top navbar-dark ${
            Nav.primary
          }`}
        >
          <div className="d-flex order-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsingNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div
            className="navbar-collapse collapse justify-content-center w-100 order-1"
            id="collapsingNavbar"
          >
            <ul className="navbar-nav w-100 nav-justified">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={Nav.container} />
        <div
          className={`d-flex align-items-center justify-content-center ${
            Main.banner
          }`}
        >
          <h1 className={`text-center align-middle ${Main.hannah}`}>
            Hannah Holzmann
          </h1>
        </div>
      </div>
    );
  }
}

export default Navbar;
