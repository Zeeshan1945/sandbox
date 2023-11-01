import React from "react";
import "@/Styles/Reviews.css";
import { PiArrowSquareUpRightLight } from "react-icons/pi";

const Reviews = () => {
  return (
    <>
      <div className="containerr">
        <div className="firstreview">
          <div className="review1">
            <p className="rp1">
              “Sandbox is really attractive and it saves my time. The support
              team is really amazing.”
            </p>
            <p className="rp2">stevenstrange</p>
          </div>
          <div className="review2">
            <p className="rp1">
              “This is just next level stuff in terms of quality, docs and
              features. I don't think I'm going to need or tolerate any other
              template from now on.”
            </p>
            <p className="rp2">68898098</p>
          </div>
        </div>
        <div className="lastreview">
          <div className="review3">
            <p className="rp1">
              “I've been a Themeforest user for almost 10 years and I have
              purchased well over 100 themes during my time. This theme is
              amongst the best here.”
            </p>
            <p className="rp2">gf57g8yb</p>
          </div>
          <div className="review4">
            <p className="rp1">
              “Simply the best templates that I have bought so far. Super clean
              code, intuitive documentations, and most important of all the best
              design.”
            </p>
            <p className="rp2">676hghg</p>
          </div>
        </div>
        <div className="priority">
          <h1>
            Our top priority is <br />
            ensuring customer <br />
            satisfaction.
          </h1>
          <p>
            Don't take our word for it. Hear <br />
            from customers about Sandbox.
          </p>
          <button>
            All Reviews <PiArrowSquareUpRightLight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
