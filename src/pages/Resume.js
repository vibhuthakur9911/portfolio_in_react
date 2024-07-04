// import MainContent from "../utils/MainContent";
import ProgressBar from "react-bootstrap/ProgressBar";
import abt_img from "../assets/abt_img.jpg";
import web_design from "../assets/web-design.png";
import web_dev from "../assets/front-end-programming.png";
import log_design from "../assets/logo-design.png";
import graphic_design from "../assets/graphic-design.png";
import Tilt from "react-parallax-tilt";

const design_skill = [
  {
    title: "Web Design",
    now: 50,
  },
  {
    title: "Logo Design",
    now: 75,
  },
  {
    title: "Graphic Design",
    now: 75,
  },
];
const database_skill = [
  {
    title: "MySql",
    now: 25,
  },
  {
    title: "Logo Design",
    now: 75,
  },
  {
    title: "Graphic Design",
    now: 75,
  },
];

function MyProgress(props) {
  return (
    <>
      <div className="progress_block" key =  {props.j}>
      <ProgressBar animated now={props.now} className="myProgress" />
      <span>{props.now}</span>
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
              {/* {design_skill.map((m,j)=> <MyProgress now = {m.now} key={j} />)}
              {database_skill.map((m,j)=> <MyProgress now = {m.now} key={j} />)} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
