import React, { useState } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import BlueWatch from "./landing-icons/blueWatch.svg";
import BlackWatch from "./landing-icons/blackWatch.svg";
import GreenWatch from "./landing-icons/greenWatch.svg";
import PinkWatch from "./landing-icons/pinkWatch.svg";
import "./Product.css";

export default function Product() {
  const [selectedWatch, setSelectedWatch] = useState(BlueWatch);
  const comp = useRef(null);

  useLayoutEffect(() => {
    const t1 = gsap.timeline();

    t1.from(
      ".watch-img",
      {
        opacity: 0,
        duration: 1,
        x: "+100",
      },
      "<"
    ).from(
      ".script",
      {
        opacity: 0,
        duration: 1,
        xPercent: "-50",
      },
      "<"
    );
  });

  const handleSmallWatchClick = (watch) => {
    setSelectedWatch(watch);
  };
  const watches = [
    {
      imgSrc: BlackWatch,
      title: "Sleek in black, a symphony of sophistication on your wrist.",
      imgAlt: "small black apple watch ",
    },
    {
      imgSrc: GreenWatch,
      title: "Nature's timekeeper, harmonizing tech and the great outdoors",
      imgAlt: "small green apple watch ",
    },
    {
      imgSrc: PinkWatch,
      title: "Tick tock in pink, elegance synced with every heartbeat",
      imgAlt: "small pink apple watch ",
    },
    {
      imgSrc: BlueWatch,
      title: "Blue horizon, your wrist's portal to limitless possibilities",
      imgAlt: "small blue apple watch ",
    },
  ];
  return (
    <div className="product-wrapper" ref={comp}>
      <div className="script">
        <h1 className="title">
          {watches.find((watch) => watch.imgSrc === selectedWatch)?.title}
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
