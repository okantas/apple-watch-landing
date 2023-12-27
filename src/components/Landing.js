import React from "react";
import Header from "./landingPage/Header";
import Product from "./landingPage/Product";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing-wrap">
      <Header />
      <Product />
    </div>
  );
}
