import React from "react";
import BlueWatch from "./landing-icons/blueWatch.svg";
import BlackWatch from "./landing-icons/blackWatch.svg";
import GreenWatch from "./landing-icons/greenWatch.svg";
import PinkWatch from "./landing-icons/pinkWatch.svg";
import "./Product.css";

export default function Product() {
  return (
    <div className="product-wrapper">
      <div className="script">
        <h1>
          <span className="bold-script">The Perfect Moment</span> Between Past
          And <br />
          future
        </h1>
        <button className="product-button">Buy Now</button>
      </div>
      <div className="watch">
        <img className="watch-img" src={BlueWatch} alt="blue apple watch " />
        <div className="small-watches-wrapper">
          <div className="small-watches">
            <img
              className="small-watches-img"
              src={BlackWatch}
              alt="small black apple watch "
            />
          </div>
          <div className="small-watches">
            <img
              className="small-watches-img"
              src={GreenWatch}
              alt="small green apple watch"
            />
          </div>
          <div className="small-watches">
            <img
              className="small-watches-img"
              src={PinkWatch}
              alt="small pink apple watch "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
