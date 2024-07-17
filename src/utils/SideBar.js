import React, { useState }  from "react";
import { IconUserCircle } from "@tabler/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
// import propTypes from "prop-types"
import {
  faUserSecret,
  faIdCard,
  // faLaptopCode,
  // faXTwitter,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const menu = [
  {
    title: "Home",
    icon:  <i className="fa fa-home"></i>,
    url: "/",
  },
  {
    title: "About me",
    icon: <FontAwesomeIcon icon={faUserSecret} />,
    url: "/about",
  },
  {
    title: "Resume",
    icon: <FontAwesomeIcon icon={faIdCard} />,
    url: "/resume",
  },
  // {
  //   title:'Portfolio',
  //   icon:   <FontAwesomeIcon icon={faIdCard} />,
  //   url: '/'
  // },
  {
    title: "Contact us",
    icon: <FontAwesomeIcon icon={faAddressBook} />,
    url: "/contact",
  },
];

function Menu({ title, url, icon, toggleSidebar }) {
  return (
    <li>
      <NavLink to={url} activeClassName="active" onClick={toggleSidebar}>
        <span className="sideIcon">{icon}</span>
        {title}
      </NavLink>
    </li>
  );
}
export default function SideBar(props) {
  const [isActive, setIsActive] = useState(true);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="header">
        <div className="header_inner">
          <div className="logo"></div>
          <div   className={`toggle_btn ${isActive ? 'active' : ''}`} 
            onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`sidebar_overlay ${isActive? `active`: ''}`}></div>
      <div className={`sideBar ${isActive ? 'active' : ''}`}  >
        <div className="sideBar_inner_content">
          <div className="sidebar_upperContent">
            <div className="logo">
              <h2>Vaibhav Thakur</h2>
            </div>
            <div className="sideMenu">
              <ul>
                {menu.map((m, i) => (
                  <Menu title={m.title} key={i} url={m.url} icon={m.icon}  toggleSidebar={toggleSidebar} />
                ))}
              </ul>
              {/* <ul>
                <li>
                  <Link to="/">
                    <span className="sideIcon">
                      <IconUserCircle stroke={2} />
                    </span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <span className="sideIcon">
                      <IconUserCircle stroke={2} />
                    </span>
                    About us
                  </Link>
                </li>

                <li>
                  <a href="/resume">
                    <span className="sideIcon">
                      <FontAwesomeIcon icon={faIdCard} />
                    </span>
                    Resume
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="sideIcon">
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </span>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <span className="sideIcon">
                      <FontAwesomeIcon icon={faAddressBook} />
                    </span>
                    Contact us
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="sidebar_lowerContent">
            <div className="socialIcon">
              <ul>
                <li>
                  <a
                    href="https://github.com/vibhuthakur9911"
                    target="_blank"
                    aria-label="Go to github"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vaibhav-thakur9911/"
                    target="_blank"
                    aria-label="Visit to Linkedin"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mr.rajput12o8/"
                    target="_blank"
                    aria-label="Visit to Instagram"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>

                <li>
                   <a
                    href="https://twitter.com/vibhuvibes"
                    target="_blank"
                    aria-label="Visit to X "
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                {/* <li> <a href="https://twitter.com/vibhuvibes" aria-label="say hi on fa-whatsapp" target="_blank">
                    <img src="assets/img/x-twitter.svg" alt=""/></a></li> */}

                {/* <li> <a href="https://wa.me/919911069091?text=Hii" aria-label="say hi on fa-whatsapp" target="_blank"> <i className="fa fa-whatsapp"></i></a></li>  */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
