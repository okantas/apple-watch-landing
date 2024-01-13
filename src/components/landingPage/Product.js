import React, { useState } from "react";
import BlueWatch from "./landing-icons/blueWatch.svg";
import BlackWatch from "./landing-icons/blackWatch.svg";
import GreenWatch from "./landing-icons/greenWatch.svg";
import PinkWatch from "./landing-icons/pinkWatch.svg";
import "./Product.css";

export default function Product() {
  const [selectedWatch, setSelectedWatch] = useState(BlueWatch);

  const handleSmallWatchClick = (watch) => {
    setSelectedWatch(watch);
  };
  const watches = [
    { imgSrc: BlackWatch, imgAlt: "small black apple watch " },
    { imgSrc: GreenWatch, imgAlt: "small green apple watch " },
    { imgSrc: PinkWatch, imgAlt: "small pink apple watch " },
    { imgSrc: BlueWatch, imgAlt: "small blue apple watch " },
  ];
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
        <img className="watch-img" src={selectedWatch} alt="Selected Watch" />
        <div className="small-watches-wrapper">
          {watches.map((watch, index) => (
            <div
              key={index}
              className="small-watches"
              onClick={() => handleSmallWatchClick(watch.imgSrc)}
            >
              <img
                className="small-watches-img"
                src={watch.imgSrc}
                alt={watch.imgAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
