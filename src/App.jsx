import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Slider from "@/Components/Slider";
import Totaldemo from "@/Components/Totaldemo";
import Homeagency from "@/Components/Homeagency";
import Purchase from "@/Components/Purchase";
import Showdata from "@/Components/Showdata";
import Features from "@/Components/Features";
import Loading from "@/Components/Loading";
import ImageSlider from "@/Components/ImageSlider";
import Types from "@/Components/Types";
import Reviews from "@/Components/Reviews";
import Unique from "@/Components/Unique";
import Footer from "@/Components/Footer";
import Footerbottom from "@/Components/Footerbottom";
import GoToTop from "@/Components/GoToTop";

const App = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setLoad(false); // Set load to false when data has finished loading
    }, 5000);
  }, []);
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Slider />
          <Totaldemo />
          <Homeagency />
          <Purchase />
          <Showdata />
          <Features />
          <ImageSlider />
          <Types />
          <Reviews />
          <Unique />
          <Footer />
          <GoToTop />
          <Footerbottom />
        </>
      )}
    </>
  );
};

export default App;
