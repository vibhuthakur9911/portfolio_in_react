// import MainContent from "../utils/MainContent";
import { useState, useEffect } from "react";
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
             <h2>HI, I'AM VAIBHAV THAKUR, </h2>
              <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>

              <button className="btn btn-primary">Download CV <FontAwesomeIcon icon={faDownload} /></button>
             </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;