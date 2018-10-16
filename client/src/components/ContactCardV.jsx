import React from "react";
import img from "../../assets/Hannah.jpg";
import Resume from "../../dist/resume.css";
import Main from "../../dist/main.css";

function ContactCardV(props) {
  return (
    <div className={`${Resume.stickyPic} ${Resume.contactCard}`}>
      <div>
        <img src={img} className={`img rounded-circle ${Main.avatar}`} />
      </div>
      <div className="text-center align-middle">
        <h5>Contact</h5>
      </div>
      <ul className={Resume.contactList}>
        <li>
          <a
            className={Resume.contactList}
            href="https://www.linkedin.com/in/hannah-holzmann/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className={Resume.contactList}
            href="https://github.com/hholzmann16"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className={Resume.contactList}
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

export default ContactCardV;
