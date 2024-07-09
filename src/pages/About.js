// import MainContent from "../utils/MainContent";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import abt_img from "../assets/abt_img.jpg";
import web_design from "../assets/web-design.png";
import web_dev from "../assets/front-end-programming.png";
import log_design from "../assets/logo-design.png";
import graphic_design from "../assets/graphic-design.png";
import Tilt from 'react-parallax-tilt';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import propTypes from "prop-types";

const specialize = [
  {
    title: "Web Design",
    desc: "Web designer specializing in front-end development. Creating visually appealing and user-friendly websites using HTML, CSS, and JavaScript to deliver engaging online experiences.",
    img: web_design,
  },
  {
    title: "Web Development",
    desc: "Experienced front-end developer proficient in HTML, CSS, and JavaScript. Crafting responsive and interactive websites, optimizing performance, and ensuring seamless user experiences through innovative coding techniques.",
    img: web_dev,
  },
  {
    title: "Graphic Design ",
    desc: "Graphic designer skilled in front-end development. Combining creativity and coding expertise to design visually stunning graphics, logos, and user interfaces that enhance brand identity and captivate audiences.",
    img: graphic_design,
  },
  {
    title: "Logo Design",
    desc: "Logo designer and front-end developer crafting impactful brand identities. Creating unique and memorable logos that effectively communicate a brand's essence, leaving a lasting impression on audiences.",
    img:log_design,
  },
];

function Specialized(props) {
  return (
    <>
      <div className="col-md-3 col-sm-6 col-xs-12" key={props.j}>
        <div className="specialize_block">
          <div className="specialize_block_inner">
            <img src={props.src} />
            <h6>{props.title}</h6>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
const About = (props) => {
  return (
    <>
      <div className="main_content">
        <div className="about_sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <span className="stroke_text">About me </span>
                <h4 className="title_text">
                  Crafting stories through design and innovation
                </h4>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12">
                <div className="about_content">
                  {/* <img src={banner_img} alt="banner_img" className="img-fluid" /> */}
                  <p>
                  As a seasoned web developer, I specialize in crafting extraordinary online experiences. My expertise lies in front-end development, where I leverage HTML, CSS, and JavaScript to transform designs into interactive realities. With meticulous attention to detail and a deep understanding of user-centered design principles, I create websites that are not only visually stunning but also intuitively navigable, captivating users from the first click.
                  </p>
                  <p>
                  I excel in responsive design, delivering seamless and engaging interfaces across all devices. My collaborative spirit allows me to work effectively with cross-functional teams, translating diverse requirements into scalable and efficient code.
                  </p>
                  <p>
                  In the ever-evolving field of web development, staying ahead of the curve is crucial. I keep abreast of the latest trends and technologies, ensuring that the solutions I provide are both current and forward-thinking. Committed to excellence, I consistently deliver high-quality solutions that meet and exceed business objectives.
                  </p>
                  <p>Let's embark on a journey to create something truly amazing together." </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="about_img ">
                <Tilt className="tilt-effect" tiltReverse={true}   trackOnWindow={true}> <div className="bord" > </div>   </Tilt>
                  <img src={abt_img} alt="banner_img" className="img-fluid" />
                </div>
              </div>

              <div className="col-md-12 col-sm-12 col-xs-12">
                <div class="skill-sec">
                  <div class="block-title">
                    <h4 className="title_text">
                      Here's what I bring to the table:
                    </h4>
                  </div>

                  <p>
                    <b>🌐 Front-End Magic:</b> I specialize in HTML, CSS, and
                    JavaScript wizardry, bringing designs to life with a touch
                    of creativity.
                  </p>
                  <p>
                    <b>👀 Detail-Oriented Design:</b> With a keen eye for
                    detail, I'm all about crafting websites that not only look
                    good but feel amazing to explore.
                  </p>
                  <p>
                    <b>📱 Responsive Design Guru:</b> No matter the device, our
                    creations will shine – I've got the responsive design game
                    down pat.
                  </p>
                  <p>
                    <b>🤝 Team Player:</b> Collaboration is my sweet spot. I
                    thrive in diverse teams, turning ideas into code that works
                    seamlessly.
                  </p>
                  <p>
                    <b>🚀 Stay Ahead of the Game:</b> In the ever-evolving world
                    of web development, I stay on top of the latest trends to
                    ensure our projects set the bar for tomorrow.
                  </p>
                  <p>
                    <b>🚀 SEO-Friendly:</b> Visibility Matters: Elevating your
                    online presence with SEO-tailored strategies, making your
                    website stand out in the digital landscape.
                  </p>
                  <p>
                    <b>👨‍💻 User-Centric Design:</b> Tailored for You: Every
                    design decision is driven by a deep understanding of your
                    users, ensuring an intuitive and enjoyable interaction.{" "}
                  </p>

                  <p>
                    <b>👀 Eye-Catching Visuals:</b> Visual Feast: Striking
                    graphics and captivating visuals that leave a lasting
                    impression and tell your unique story.
                  </p>
                </div>

                <h4 className="title_text">Specialized in:-</h4>
                <div className="specialized_sec">
                  <div className="row">
                    {/* {specialize.map((m)=>)} */}
                    {specialize.map((m, j) => (
                      <Specialized key={j} src={m.img} title={m.title} desc={m.desc} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
