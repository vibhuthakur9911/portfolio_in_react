// import MainContent from "../utils/MainContent";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import abt_img from "../assets/abt_img.jpg";
import web_design from "../assets/web-design.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import propTypes from "prop-types";

const specialize = [
  {
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: web_design,
  },
  {
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: web_design,
  },
  {
    title: "Logo Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: web_design,
  },
  {
    title: "Graphic Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: web_design,
  },
];

function Specialized(props) {
  return (
    <>
      <div className="col-md-3 col-sm-6 col-xs-12">
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
          <div className="row align-items-center">
            <div className="col-md-12">
              <span className="stroke_text">About me </span>
              <h3 className="title_text">
                Crafting stories through design and innovation
              </h3>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="about_content">
                {/* <img src={banner_img} alt="banner_img" className="img-fluid" /> */}
                <p>
                  As a seasoned web developer, I excel in the art of crafting
                  extraordinary online experiences. My expertise lies in
                  front-end development, where I leverage HTML, CSS, and
                  JavaScript to breathe life into designs. Meticulous in my
                  approach, I possess a keen eye for detail and a profound
                  understanding of user-centered design principles. My goal is
                  to fashion websites that are not only visually stunning but
                  also intuitively navigable, captivating users from the first
                  click.
                </p>
                <p>
                  Proficient in the intricacies of responsive design, I pride
                  myself on delivering seamless and engaging interfaces across
                  all devices. A collaborative spirit, I am skilled in working
                  with cross-functional teams, translating diverse requirements
                  into scalable and efficient code.
                </p>
                <p>
                  In this dynamic field, staying ahead of the curve is crucial.
                  I remain at the forefront of the latest web development
                  trends, ensuring that the solutions I provide are not only
                  current but also forward-thinking. Committed to excellence, I
                  consistently deliver high-quality solutions that not only meet
                  but exceed business objectives.
                </p>
                <p>
                  Let's embark on a journey of creating something truly amazing
                  together.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="about_img">
                <img src={abt_img} alt="banner_img" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div class="skill-sec">
                <div class="block-title">
                  <h3 className="title_text">
                    {" "}
                    Here's what I bring to the table:
                  </h3>
                </div>

                <p>
                  <b>🌐 Front-End Magic:</b> I specialize in HTML, CSS, and
                  JavaScript wizardry, bringing designs to life with a touch of
                  creativity.
                </p>
                <p>
                  <b>👀 Detail-Oriented Design:</b> With a keen eye for detail,
                  I'm all about crafting websites that not only look good but
                  feel amazing to explore.
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
                  <b>👨‍💻 User-Centric Design:</b> Tailored for You: Every design
                  decision is driven by a deep understanding of your users,
                  ensuring an intuitive and enjoyable interaction.{" "}
                </p>

                <p>
                  <b>👀 Eye-Catching Visuals:</b> Visual Feast: Striking
                  graphics and captivating visuals that leave a lasting
                  impression and tell your unique story.
                </p>
              </div>

              <div className="specialized_sec">
                <h3 className="title_text">Specialized in:-</h3>
                <div className="row">
                  {/* {specialize.map((m)=>)} */}
                  {specialize.map((m) => (
                    <Specialized src={m.img} title={m.title} desc={m.desc} />
                  ))}
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
