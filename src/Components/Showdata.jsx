import React, { useState } from "react";
import "@/Styles/Showdata.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Showdata = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="datacontainer">
        <h1 id="mainheading">
          Save your time and money by <br />
          choosing Sandbox for your <br />
          website.
        </h1>
        <div className="datacontainer2">
          <div id="data1">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1>
                {counterOn && (
                  <CountUp start={0} end={250} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>

            <p>UI elements</p>
          </div>
          <div id="data2">
            <ScrollTrigger>
              <h1>
                {counterOn && (
                  <CountUp start={0} end={150} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>

            <p>Pre-made blocks</p>
          </div>
          <div id="data3">
            <ScrollTrigger>
              <h1>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>

            <p>Neatly coded pages</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showdata;
