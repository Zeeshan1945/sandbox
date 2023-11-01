import React from "react";
import twitter from "@/assets/twitter.png";
import "@/Styles/Footerbottom.css";
function Footerbottom() {
  return (
    <div className="conatinfb">
      <div className="rights">
        <p>© 2023 Sandbox. All rights reserved.</p>
      </div>
      <div className="social">
        <img src={twitter} alt="" />
      </div>
    </div>
  );
}

export default Footerbottom;
