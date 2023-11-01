import React from "react";
import "@/Styles/Homeagency.css";
import images19 from "@/assets/images19.jpg";
import images20 from "@/assets/images20.jpg";
import images21 from "@/assets/images21.jpg";

const Homeagency = () => {
  return (
    <>
      <h1 className="mainheading">HOME AGENCY</h1>
      <div className="containertext">
        <div className="childt1">
          <img src={images19} alt="Asset Image" className="agencyp" />
          <h1 className="smallheadinds">Home Agency 1</h1>
        </div>
        <div className="childt2">
          <img src={images20} alt="Asset Image" className="agencyp" />
          <h1 className="smallheadinds">Home Agency 2</h1>
        </div>
        <div className="childt3">
          <img src={images21} alt="Asset Image" className="agencyp" />
          <h1 className="smallheadinds">Home Agency 3</h1>
        </div>
      </div>
    </>
  );
};

export default Homeagency;
