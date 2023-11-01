import React from "react";
import "@/Styles/Slider.css";

const Slider = () => {
  return (
    <>
      <marquee behavior="scroll" direction="left" scrolldelay="5">
        <div className="image-set">
          <img src="/src/assets/images05.jpg" alt="Image 1" />
          <img src="/src/assets/images06.jpg" alt="Image 2" />
          <img src="/src/assets/images07.jpg" alt="Image 3" />
          <img src="/src/assets/images08.jpg" alt="Image 4" />
          <img src="/src/assets/images09.jpg" alt="Image 5" />
          <img src="/src/assets/images10.jpg" alt="Image 6" />
          <img src="/src/assets/images11.jpg" alt="Image 7" />
          <img src="/src/assets/images12.jpg" alt="Image 8" />
          <img src="/src/assets/images13.jpg" alt="Image 9" />
          <img src="/src/assets/images14.jpg" alt="Image 10" />
          <img src="/src/assets/images15.jpg" alt="Image 11" />
        </div>
      </marquee>

      <marquee behavior="scroll" direction="right" scrolldelay="5">
        <div className="image-set">
          <img src="/src/assets/images16.jpg" alt="Image 12" />
          <img src="/src/assets/images17.jpg" alt="Image 13" />
          <img src="/src/assets/images18.jpg" alt="Image 14" />
          <img src="/src/assets/images52.jpg" alt="Image 15" />
          <img src="/src/assets/images53.jpg" alt="Image 17" />
          <img src="/src/assets/images54.jpg" alt="Image 18" />
          <img src="/src/assets/images55.jpg" alt="Image 19" />
          <img src="/src/assets/images56.jpg" alt="Image 20" />
          <img src="/src/assets/images57.jpg" alt="Image 21" />
          <img src="/src/assets/images58.jpg" alt="Image 22" />
          <img src="/src/assets/images59.jpg" alt="Image 23" />
        </div>
      </marquee>
    </>
  );
};

export default Slider;
