import React from "react";
import Main from "../../dist/main.css";
import img from "../../assets/Hannah.jpg";

function Home(props) {
  return (
    <div className="text-center">
      <img src={img} className={`img rounded-circle ${Main.avatar}`} />
    </div>
  );
}

export default Home;
