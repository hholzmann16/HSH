import React from "react";
import ContactCardV from "./ContactCardV.jsx";
import ContactCardH from "./ContactCardH.jsx";
import Resume from "../../dist/resume.css";

function ResumePage(props) {
  return (
    <div className="row">
      <div className="col-md-2 d-none d-md-block">
        <ContactCardV />
      </div>
      <div className="col-md-10">
        <div className="d-md-none">
          <ContactCardH />
        </div>
        <h1 className={`text-center align-middle ${Resume.resumeHeader}`}>
          Techincal Skills
        </h1>
        <ul className={Resume.skillList}>
          <li>Javascript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>Redux</li>
          <li>AngularJS</li>
          <li>Backbone</li>
          <li>Express.js</li>
          <li>Mongoose</li>
          <li>Sequelize</li>
          <li>Lodash</li>
          <li>Node.js</li>
          <li>RESTful API</li>
          <li>Redis</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Jest</li>
          <li>Enzyme</li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>Git</li>
          <li>npm</li>
          <li>Webpack</li>
          <li>Postman</li>
          <li>Agile</li>
        </ul>
      </div>
    </div>
  );
}

export default ResumePage;
