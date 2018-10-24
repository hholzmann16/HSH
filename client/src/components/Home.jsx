import React from "react";
import Main from "../../dist/main.css";
import img from "../../assets/Hannah.jpg";
import AboutMeCarousel from "./AboutMeCarousel.jsx";

function Home(props) {
  return (
    <div>
      <div className="text-center">
        <img src={img} className={`img rounded-circle ${Main.avatar}`} />
        <div className={Main.aboutMe}>
          <div>
            Hello, World! I'm a full-stack software developer based in Los
            Angeles, CA.
          </div>
          <div>
            I love all aspects of web development, from feature-rich user
            experiences, to managing RESTful Node APIs for SQL and NoSQL
            databases.
          </div>
        </div>
        <div>{<AboutMeCarousel />}</div>
      </div>
    </div>
  );
}

export default Home;
