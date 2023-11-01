import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "@/images";
import "@/Styles/ImageSlider.css";

function ImageSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <div id="Slider">
        <h1 id="slheading">
          Build your website using the powerful <br />
          features of Sandbox
        </h1>
        <motion.div
          ref={carousel}
          id="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            id="inner-carousel"
          >
            {images.map((image) => {
              return (
                <motion.div id="item" key={image}>
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ImageSlider;
