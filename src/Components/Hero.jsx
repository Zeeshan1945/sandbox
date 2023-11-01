import React from "react";
import "@/Styles/Hero.css";
import { motion } from "framer-motion";

const texts = [{ text: "Digital Market", duration: 1 }];
const Hero = () => {
  return (
    <>
      <div className="containert">
        <div className="text">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 3,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            <h1>
              Create a powerful but <br />
              effortless website for
            </h1>
          </motion.div>

          {texts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: item.duration }}
            >
              <h1 className="DM" style={{ color: "#3f78e0" }}>
                {item.text}
              </h1>
            </motion.div>
          ))}

          <motion.div
            initial={{ y: -100 }} // Initial position (above the container)
            animate={{ y: 0 }} // Animation end position (at the top)
            transition={{
              duration: 5,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            <p>
              You can create your website in minutes with the help of countless
              <br />
              amazing features of Sandbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -100 }} // Initial position (above the container)
            animate={{ y: 0 }} // Animation end position (at the top)
            transition={{
              duration: 6,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            <div className="child">
              <button className="demo">See Demo Pages</button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
