import React from "react";
import img from "../../assets/Hannah.jpg";
import Resume from "../../dist/resume.css";
import Main from "../../dist/main.css";

function ContactCardH(props) {
  return (
    <div className="text-center align-middle">
      <img src={img} className={`img rounded-circle ${Main.avatar}`} />
      <div>
        <a
          className={Resume.contactSpacing}
          href="https://www.linkedin.com/in/hannah-holzmann/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className={Resume.contactSpacing}
          href="https://github.com/hholzmann16"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className={Resume.contactSpacing}
          href="mailto:hholzmann16@gmail.com"
          target="_blank"
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default ContactCardH;
