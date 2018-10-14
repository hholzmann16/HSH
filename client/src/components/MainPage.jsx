import React from "react";
import Navbar from "./Navbar.jsx";
import ResumePage from "./ResumePage.jsx";
import Home from "./Home.jsx";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };
    this.handleBlogPage = this.handleBlogPage.bind(this);
    this.handleContactPage = this.handleContactPage.bind(this);
    this.handlePortfolioPage = this.handlePortfolioPage.bind(this);
    this.handleResumePage = this.handleResumePage.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
  }

  handleHomePage(e) {
    e.preventDefault();
    this.setState({ currentPage: "home" });
  }

  handleResumePage(e) {
    e.preventDefault();
    this.setState({ currentPage: "resume" });
  }

  handlePortfolioPage(e) {
    e.preventDefault();
    this.setState({ currentPage: "portfolio" });
  }

  handleBlogPage(e) {
    e.preventDefault();
    this.setState({ currentPage: "blog" });
  }

  handleContactPage(e) {
    e.preventDefault();
    this.setState({ currentPage: "contact" });
  }

  render() {
    var pageSelect;
    if (this.state.currentPage == "resume") {
      pageSelect = <ResumePage />;
    } else if (this.state.currentPage == "blog") {
      pageSelect = <Blog />;
    } else if (this.state.currentPage == "contact") {
      pageSelect = <Contact />;
    } else if (this.state.currentPage == "portfolio") {
      pageSelect = <Portfolio />;
    } else {
      pageSelect = <Home />;
    }

    console.log("In the main page", this.state.currentPage);
    return (
      <div>
        <div>
          <Navbar
            resumeClick={this.handleResumePage}
            blogClick={this.handleBlogPage}
            contactClick={this.handleContactPage}
            portfolioClick={this.handlePortfolioPage}
            homeClick={this.handleHomePage}
            current={this.currentPage}
          />
        </div>
        {pageSelect}
      </div>
    );
  }
}

export default MainPage;
