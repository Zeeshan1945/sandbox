import React from "react";
import images52 from "@/assets/images52.png";
import images61 from "@/assets/images61.png";
import images62 from "@/assets/images62.png";
import images63 from "@/assets/images63.png";
import "@/Styles/Features.css";
const Features = () => {
  return (
    <>
      <div id="containerf">
        <div className="mpic">
          <img src={images52} alt="" id="mainimg" />
        </div>
        <div id="texticon">
          <div id="texticon1">
            <img src={images61} alt="" />
            <div className="hp1">
              <h4>Color and Font Options</h4>
              <p>
                Easily customize colors and fonts, <br />
                or choose from provided options.
              </p>
            </div>
          </div>
          <div id="texticon2">
            <img src={images62} alt="" />
            <div className="hp2">
              <h4>Cool Features & Elements</h4>
              <p>
                Equipped with stunning features and <br />
                elements for designing appealing pages.
              </p>
            </div>
          </div>
          <div id="texticon3">
            <img src={images63} alt="" />
            <div className="hp3">
              <h4>Modern Portfolio Layouts</h4>
              <p>
                Effortlessly create and maintain a visually <br />
                stunning and impactful portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
