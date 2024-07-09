// import MainContent from "../utils/MainContent";
import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import banner_img from "../assets/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";



const Home = () => {
  return (
    <>
      <div className="main_content">
        <div className="home_banner" style={{ backgroundImage: `url(${banner_img})` }}>
            <div className="home_banner_left" >
             <div className="banner-content">
             {/* <h1></h1> */}
             <h2>HI, I'AM VAIBHAV THAKUR,A <br/> 
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Enthusiast',
        1000,
        'Visionary Developer',
        1000,
        'Tech Alchemist',
        1000,
        'Graphic Designer',
        1000,
      ]}
      wrapper="span"
      speed={170}
      style={{  display: 'inline-block', color: 'rgb(36 210 132)'}}
      repeat={Infinity}
    /> </h2>
              <h5>Crafting Extraordinary Online Experience</h5>
              <p>Discover high-quality solutions that not only meet but exceed your business objectives. Witness the transformation of your ideas into something truly remarkable!</p>

              <a href="javascript:void(0);" className=" default-btn"><span>Download CV <FontAwesomeIcon icon={faDownload} /></span></a>
             </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;