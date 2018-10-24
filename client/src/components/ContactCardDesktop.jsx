import React from "react";
import img from "../../assets/Hannah.jpg";
import PortStyle from "../../dist/portfolio.css";
import ContactStyle from "../../dist/contactStyle.css";

function ContactCardDesktop(props) {
  return (
    <div className={`${PortStyle.stickyPic} ${PortStyle.contactCard}`}>
      <div>
        <img
          src={img}
          className={`img rounded-circle ${ContactStyle.avatar}`}
        />
      </div>
      <div className="text-center align-middle">
        <h5>Contact</h5>
      </div>
      <ul className={PortStyle.contactList}>
        <li>
          <a
            className={PortStyle.contactList}
            href="https://www.linkedin.com/in/hannah-holzmann/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className={PortStyle.contactList}
            href="https://github.com/hholzmann16"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className={PortStyle.contactList}
            href="mailto:hannah.s.holzmann@gmail.com"
            target="_blank"
          >
            Email
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactCardDesktop;
