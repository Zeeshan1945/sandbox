import React from "react";
import images70 from "@/assets/images70.png";
import "@/Styles/Unique.css";
const Unique = () => {
  return (
    <>
      <div className="unique">
        <img src={images70} alt="logo" className="unpic" />
        <h1 className="unh">
          Think unique and make <br />a difference with <br />
          Sandbox.
        </h1>
        <p className="unp">
          We are trusted by thousands of clients. <br />
          Join them now and easily create your stunning website in no time.
        </p>
        <button className="unb">Buy Sandbox</button>
      </div>
    </>
  );
};

export default Unique;
