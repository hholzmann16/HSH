import React from "react";
import Nav from "../../dist/nav.css";

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
          <div className="d-flex w-50 order-0">
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
            className="navbar-collapse collapse justify-content-center order-2"
            id="collapsingNavbar"
          >
            <ul className="navbar-nav">
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
          <span className="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last" />
        </nav>
        <div className={Nav.container} />
      </div>
    );
  }
}

export default Navbar;
