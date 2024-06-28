// import MainContent from "../utils/MainContent";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import abt_img from "../assets/abt_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="main_content">
        <div className="about_sec">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="about_img">
                {/* <img src={banner_img} alt="banner_img" className="img-fluid" /> */}
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="about_img">
                <img src={abt_img} alt="banner_img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
