// import MainContent from "../utils/MainContent";
import ProgressBar from "react-bootstrap/ProgressBar";
import ds_logo from "../assets/dreams-logo.svg";
import css_logo from "../assets/css-logo.png";

const design_skill = [
  {
    title: "Web Design",
    now: 50,
  },
  {
    title: "Graphic Design",
    now: 75,
  },
  {
    title: "Adobe Photoshop",
    now: 75,
  },
  {
    title: "Adobe Illustrator",
    now: 75,
  },
];
const database_skill = [
  {
    title: "MySql",
    now: 25,
  },
  {
    title: "MongoDB",
    now: 75,
  },
];
const tech_skills = [
  {
    title: "HTML5",
    now: 25,
  },
  {
    title: "CSS",
    now: 75,
  },
  
  {
    title: "Sass",
    now: 75,
  },
  {
    title: "Bootsrtap",
    now: 75,
  },
  {
    title: "Tailwind",
    now: 75,
  },
  {
    title: "JavaScript",
    now: 75,
  },
  {
    title: "JQuery",
    now: 75,
  },
  {
    title: "React.js",
    now: 75,
  },
  {
    title: "Php",
    now: 75,
  },
];

function MyProgress(props) {
  return (
    <>
      <div className="progress_block" key={props.j}>
        <h5 className="skill_name">{props.title}</h5>
        <ProgressBar animated now={props.now} className="myProgress" />
        {/* <span>{props.now}</span> */}
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
            <div className="resume_head">
              <h5 className="stroke_text">Resume</h5>
              <span className="tag_block">2+ Years of Experienced</span>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="exp_block">
                  <h4 className="title_text">Experience</h4>
                  <div className="exp_content">
                    <div className="exp_content_block">
                      <h6 className="tag_block">July 2023 - Present</h6>
                      <h5 className="exp-title">MERN Stack Web Developer</h5>
                      <span class="event-description">
                        <span class="dreams-logo">
                          <img src={ds_logo} alt="" />
                        </span>
                        Dream Steps Technologies
                      </span>
                      <p>
                        Thriving as a Web Developer at Dream Steps Technologies,
                        a pinnacle in India's IT industry. I specialize in
                        crafting innovative web solutions that redefine digital
                        landscapes. By embracing challenges, fostering growth,
                        and contributing to a dynamic team, I play a vital role
                        in transforming visions into seamless online
                        experiences. Embarking on a new chapter, I now leverage
                        the latest web techniques such as React.js, Express.js,
                        Node.js etc., ensuring every line of code makes a
                        significant impact.
                      </p>
                    </div>

                    <div className="exp_content_block">
                      <h6 className="tag_block">February 2022 - July 2023</h6>
                      <h5 className="exp-title">Web Developer</h5>
                      <span class="event-description">
                        <span class="dreams-logo">
                          <img src={css_logo} alt="" />
                        </span>
                        Css Founder Pvt Ltd
                      </span>
                      <p>
                        On my ongoing journey to become a successful web
                        developer, I immerse myself in coding challenges,
                        Grateful for the invaluable learning opportunities and
                        the chance to be part of a team shaping digital
                        landscapes on a global scale. CSS Founder Pvt. Ltd not
                        only kickstarted my career but also fueled my passion
                        for crafting impactful online experiences.
                      </p>
                    </div>

                    <div className="exp_content_block">
                      <h6 className="tag_block">February 2022 - July 2023</h6>
                      <h5 className="exp-title">Trainer</h5>
                      <span class="event-description">
                        <span class="dreams-logo">
                          <img src={css_logo} alt="" />
                        </span>
                        Css Founder Pvt Ltd
                      </span>
                      <p>
                        I honed my skills and contributed to the company's
                        success in delivering cutting-edge web solutions. From
                        mastering the intricacies of coding to collaborating
                        with seasoned professionals, and became trainer for the
                        newbie this experience laid the foundation for my
                        growth.
                      </p>
                    </div>

                    <div className="exp_content_block">
                      <h6 className="tag_block">Aug 2021 - February 2022</h6>
                      <h5 className="exp-title">Web Designer</h5>
                      <span class="event-description">
                        <span class="dreams-logo">
                          <img src={css_logo} alt="" />
                        </span>
                        Css Founder Pvt Ltd
                      </span>
                      <p>
                        Embarked on my web development journey at Css Founder
                        Pvt. Ltd, a globally renowned IT powerhouse. As a fresh
                        entrant to the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="tech_skills">
                <h4 className="title_text">Desgining Skills</h4>
                {design_skill.map((m,j)=> <MyProgress now = {m.now} title = {m.title} key={j} />)}
                </div>
                <div className="tech_skills">
                <h4 className="title_text">Database Skills</h4>
                {database_skill.map((m,j)=> <MyProgress now = {m.now} key={j} title = {m.title} />)}
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="tech_skills">
                <h4 className="title_text">Desgining Skills</h4>
                {tech_skills.map((m,j)=> <MyProgress now = {m.now} title = {m.title} key={j} />)}
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
