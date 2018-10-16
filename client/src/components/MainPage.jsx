import React from "react";
import Navbar from "./Navbar.jsx";
import Portfolio from "./Portfolio.jsx";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainPage(props) {
  return (
    <div>
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default MainPage;
