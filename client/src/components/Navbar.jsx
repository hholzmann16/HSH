import React from "react";
import Nav from "../../dist/nav.css";
import Main from "../../dist/main.css";

function Navbar(props) {
  console.log(props, "these are the nav props");
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
            <li
              className={`nav-item ${props.current == "home" ? "active" : ""}`}
            >
              <a className="nav-link" href="#" onClick={props.homeClick}>
                Home <span className="sr-only">Home</span>
              </a>
            </li>
            <li
              className={`nav-item ${
                props.current == "resume" ? "active" : ""
              }`}
            >
              <a className="nav-link" href="#" onClick={props.resumeClick}>
                Resume
              </a>
            </li>
            <li
              className={`nav-item ${
                props.current == "portfolio" ? "active" : ""
              }`}
            >
              <a className="nav-link" href="#" onClick={props.portfolioClick}>
                Portfolio
              </a>
            </li>
            <li
              className={`nav-item ${props.current == "blog" ? "active" : ""}`}
            >
              <a className="nav-link" href="#" onClick={props.blogClick}>
                Blog
              </a>
            </li>
            <li
              className={`nav-item ${
                props.current == "contact" ? "active" : ""
              }`}
            >
              <a className="nav-link" href="#" onClick={props.contactClick}>
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

export default Navbar;
