import React, { useState } from "react";
import "@/Styles/Navbar.css";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/Ti";
import images02 from "@/assets/images02.png";
import Button from "@/Components/Button";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <img src={images02} alt="" />
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              Demo
              <TiArrowSortedDown />
            </li>
            <li>
              Pages
              <TiArrowSortedDown />
            </li>
            <li>
              Blogs
              <TiArrowSortedDown />
            </li>
            <li>
              Portfolio
              <TiArrowSortedDown />
            </li>
            <li>
              Blocks
              <TiArrowSortedDown />
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <FaSearch className="search" />
            </li>
            <li>
              <Button />
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
