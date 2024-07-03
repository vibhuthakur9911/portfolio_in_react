// import MainContent from "../utils/MainContent";
import abt_img from "../assets/abt_img.jpg";
import web_design from "../assets/web-design.png";
import web_dev from "../assets/front-end-programming.png";
import log_design from "../assets/logo-design.png";
import graphic_design from "../assets/graphic-design.png";
import Tilt from "react-parallax-tilt";

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
    img: log_design,
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
const Resume = (props) => {
  return (
    <>
      <div className="main_content">
        <div className="about_sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="resume_head">
                  <h5 className="stroke_text">Resume</h5>
                  <span className="tag_block">2+ Years of Experienced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
