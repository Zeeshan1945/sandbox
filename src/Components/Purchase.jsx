import React from "react";
import "@/Styles/Purchase.css";
import images60 from "@/assets/images60.png";
import { PiArrowSquareOutLight } from "react-icons/pi";
const Purchase = () => {
  return (
    <>
      <div className="parent">
        <img src={images60} alt="" />
        <div className="c1">
          <h1>GET THIS THEME</h1>
        </div>
        <div className="button-container">
          <button className="PN">
            PURCHASE NOW
            <PiArrowSquareOutLight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Purchase;
