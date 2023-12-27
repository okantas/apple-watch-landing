import React from "react";
import Apple from "./landing-icons/AppleIcon.svg";
import Search from "./landing-icons/Search.svg";
import Bag from "./landing-icons/ShoppingBag.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrap">
      <div className="header">
        <img src={Apple} alt="apple" className="apple-icon" />
        <ul className="header-options">
          <li>
            <a href="#" target="_blank">
              Mac
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              iPhone
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              iPad
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              iWatch
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="right-part">
        <img src={Search} alt="Search icon" />

        <img src={Bag} alt="shopping bag" />
      </div>
    </div>
  );
}
