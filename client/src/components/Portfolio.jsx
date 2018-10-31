import React from "react";
import ContactCardDesktop from "./ContactCardDesktop.jsx";
import ContactCardMobile from "./ContactCardMobile.jsx";
import PortStyle from "../../dist/portfolio.css";
import RPS from "../../assets/RPS.png";
import Sephora1 from "../../assets/Sephora1.png";

function Portfolio(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <ContactCardDesktop />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col">
              <div className="d-md-none">
                <ContactCardMobile />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1
                className={`text-center align-middle ${PortStyle.resumeHeader}`}
              >
                Techincal Skills
              </h1>
              <ul className={PortStyle.skillList}>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>Lodash</li>
                <li>Redis</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB/Mongoose</li>
                <li>Sequelize</li>
                <li>Jest/Enzyme</li>
                <li>Mocha</li>
                <li>Chai</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Webpack</li>
                <li>TravisCI</li>
              </ul>
              <div className={PortStyle.line} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1
                className={`text-center align-middle ${PortStyle.resumeHeader}`}
              >
                Applications
              </h1>
              <div className={PortStyle.bumpSection}>
                <h2>
                  <a href="https://github.com/hholzmann16/IKEA_Remake">
                    Ikea Clone
                  </a>
                </h2>
                <ul className={PortStyle.bullets}>
                  <li>
                    IKEA remake with a focus on handling high amounts of data
                    and traffic
                  </li>
                  <li>
                    Technologies used: React | Express | MySQL | MongoDB | AWS |
                    Docker
                  </li>
                  <li>
                    Scaled three t2 microservices to handle 4450 RPS with 10M
                    records with Nginx load balancer and Redis cache
                  </li>
                  <li>
                    Maximized query performance to reduce Mongo query time from
                    4.214 seconds to 7 ms, and MySQL from 10.6 seconds to 6.34
                    ms
                  </li>
                  <li>
                    Generated 10 million unique records for database
                    benchmarking between MySQL and Mongo, ultimately choosing
                    MySQL for speed
                  </li>
                  <li>
                    Identified system bottlenecks with Artillery.io and New
                    Relic to optimize requests per second
                  </li>
                </ul>
                <div className="text-center">
                  <img src={RPS} className={PortStyle.RPSimg} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={PortStyle.bumpSection}>
                <h2>
                  <a href="https://github.com/hholzmann16/Sephora_ItemDescription">
                    Sephora Clone
                  </a>
                </h2>
                <ul className={PortStyle.bullets}>
                  <li>Designed and deployed Sephora's item description page</li>
                  <li>
                    Technologies used: React | Redux | Express | PostgreSQL |
                    AWS | Docker
                  </li>
                  <li>
                    Created a visual replica of Sephora's item description
                    module using CSS modules
                  </li>
                  <li>
                    Improved UX by recreating button/image hover functionality
                  </li>
                  <li>Hosted four modules through a proxy server with AWS</li>
                </ul>
                <div className="text-center">
                  <img src={Sephora1} className={PortStyle.SephoraImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
