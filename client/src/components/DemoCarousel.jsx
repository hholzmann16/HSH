import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Main from "../../dist/main.css";
import NancyDrew from "../../assets/Nancy_Drew.jpg";
import Dinner from "../../assets/dinner.jpg";
import Bodensee from "../../assets/Bodensee.jpg";

function DemoCarousel(props) {
  return (
    <div className={`text-center mx-auto ${Main.homeCarousel}`}>
      <Carousel centerMode centerSlidePercentage={50} emulateTouch>
        <div>
          <img src={NancyDrew} />
          <p className="legend">
            I have played every Nancy Drew game since its release in 1997
          </p>
        </div>
        <div>
          <img src={Dinner} />
          <p className="legend">
            Current Project: An app to help find the perfect date-night
            restaurant
          </p>
        </div>
        <div>
          <img src={Bodensee} />
          <p className="legend">I was born in Ravensburg, Germany</p>
        </div>
        <div>
          <img src={NancyDrew} />
          <p className="legend">My next goal is to learn Python</p>
        </div>
      </Carousel>
    </div>
  );
}

export default DemoCarousel;
