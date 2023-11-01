import React, { useState } from "react";
import "@/Styles/Totaldemo.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Totaldemo = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="container2">
        <div className="head1">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1>
              {counterOn && (
                <CountUp start={0} end={37} duration={2} delay={0} />
              )}
            </h1>
          </ScrollTrigger>
        </div>
        <div className="head2">
          <h1>
            Functional, impressive <br />
            and rich demos to start <br />
            with
          </h1>
        </div>
      </div>
    </>
  );
};

export default Totaldemo;
