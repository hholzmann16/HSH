import React from "react";
import Nav from "../../dist/nav.css";
import Main from "../../dist/main.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
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
            <li className="nav-item">
              <NavLink
                exact={true}
                className={`nav-link ${Nav.linkColor}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${Nav.linkColor}`} to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${Nav.linkColor}`} to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${Nav.linkColor}`} to="/contact">
                Contact
              </NavLink>
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
