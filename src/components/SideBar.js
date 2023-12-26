import React from "react";
import BarIcon from "../icons/BarIcon.svg";
import Facebook from "../icons/FacebookIcon.svg";
import Twitter from "../icons/TwitterIcon.svg";
import Linkedin from "../icons/LİnkedinIcon.svg";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="container">
      <div className="bar-icon">
        <img src={BarIcon} alt="Bar icon" />
      </div>
      <div className="social-media">
        <img src={Facebook} alt="facebook" className="social-icons" />
        <img src={Twitter} alt="twitter" className="social-icons" />
        <img src={Linkedin} alt="linkedin" className="social-icons" />
      </div>
    </div>
  );
}
