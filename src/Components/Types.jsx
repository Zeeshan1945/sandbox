import React from "react";
import images60 from "@/assets/images60.png";
import images61 from "@/assets/images61.png";
import images62 from "@/assets/images62.png";
import images63 from "@/assets/images63.png";
import images64 from "@/assets/images64.png";
import images65 from "@/assets/images65.png";
import images66 from "@/assets/images66.png";
import images67 from "@/assets/images67.png";
import images68 from "@/assets/images68.png";
import images69 from "@/assets/images69.png";
import "@/Styles/Types.css";
function Types() {
  return (
    <>
      <div id="containertypes">
        <div className="t1">
          <img src={images60} alt="" className="copmpic" />
          <p className="comtext">Built with Bootstrap 5</p>
        </div>
        <div className="t2">
          <img src={images61} alt="" className="copmpic" />
          <p className="comtext">
            SEO-friendly <br />
            Coding
          </p>
        </div>

        <div className="t3">
          <img src={images62} alt="" className="copmpic" />
          <p className="comtext">
            Valid W3C <br />
            HTML5 & CSS3
          </p>
        </div>

        <div className="t4">
          <img src={images63} alt="" className="copmpic" />
          <p className="comtext">
            Retina-ready <br />
            Graphics
          </p>
        </div>

        <div className="t5">
          <img src={images64} alt="" className="copmpic" />
          <p className="comtext">
            One-page <br />
            Layout Option
          </p>
        </div>

        <div className="t6">
          <img src={images65} alt="" className="copmpic" />
          <p className="comtext">
            Isotope <br />
            Filterable Gallery
          </p>
        </div>

        <div className="t7">
          <img src={images66} alt="" className="copmpic" />
          <p className="comtext">
            Mailchimp <br />
            Compatible
          </p>
        </div>

        <div className="t8">
          <img src={images67} alt="" className="copmpic" />
          <p className="comtext">Contact Form</p>
        </div>

        <div className="t9">
          <img src={images68} alt="" className="copmpic" />
          <p className="comtext">
            Animations <br />
            on Page Scroll
          </p>
        </div>

        <div className="t10">
          <img src={images69} alt="" className="copmpic" />
          <p className="comtext">
            Top-Notch Support <br />& Free Updates
          </p>
        </div>
      </div>
    </>
  );
}

export default Types;
