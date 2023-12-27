import React from "react";
import BlueWatch from "./landing-icons/blueWatch.svg";
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
      </div>
    </div>
  );
}
