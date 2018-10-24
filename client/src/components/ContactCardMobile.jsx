import React from "react";
import img from "../../assets/Hannah.jpg";
import PortStyle from "../../dist/portfolio.css";
import Main from "../../dist/main.css";

function ContactCardMobile(props) {
  return (
    <div className="text-center align-middle">
      <img src={img} className={`img rounded-circle ${Main.avatar}`} />
      <div>
        <a
          className={PortStyle.contactSpacing}
          href="https://www.linkedin.com/in/hannah-holzmann/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className={PortStyle.contactSpacing}
          href="https://github.com/hholzmann16"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className={PortStyle.contactSpacing}
          href="mailto:hannah.s.holzmann@gmail.com"
          target="_blank"
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default ContactCardMobile;
