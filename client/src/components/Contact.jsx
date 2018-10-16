import React from "react";
import Gmail from "../../assets/gmail-logo.png";
import Github from "../../assets/github-mark.png";
import LinkedIn from "../../assets/linked_in.png";
import ContactStyle from "../../dist/contactStyle.css";

function Contact(props) {
  return (
    <div className="col text-center">
      <div className="row mt-3">
        <div className="col-md-2 offset-md-3">
          <img src={Github} className={ContactStyle.logo} />
        </div>
        <div className={`col-md-7 text-md-left ${ContactStyle.links}`}>
          <div className="box h-100 d-flex justify-content-center flex-column">
            <a href="https://github.com/hholzmann16">
              https://github.com/hholzmann16
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-2 offset-md-3">
          <img src={LinkedIn} className={ContactStyle.logo} />
        </div>
        <div className={`col-md-7 text-md-left ${ContactStyle.links}`}>
          <div className="box h-100 d-flex justify-content-center flex-column">
            <a href="https://www.linkedin.com/in/hannah-holzmann/">
              https://www.linkedin.com/in/hannah-holzmann/
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-2 offset-md-3">
          <img src={Gmail} className={ContactStyle.logo} />
        </div>
        <div className={`col-md-7 text-md-left ${ContactStyle.links}`}>
          <div className="box h-100 d-flex justify-content-center flex-column">
            <a href="mailto:hannah.s.holzmann@gmail.com">
              hannah.s.holzmann@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
