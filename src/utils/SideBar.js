import React from "react";
import { IconUserCircle } from "@tabler/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink } from "react-router-dom";
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
  title:'Home',
  icon:  <IconUserCircle stroke={2} />,
  url: '/'
},
{
  title:'About me',
  icon:   <FontAwesomeIcon icon={faUserSecret} />,
  url: '/about'
},
{
  title:'Resume',
  icon:   <FontAwesomeIcon icon={faIdCard} />,
  url: '/resume'
},
// {
//   title:'Portfolio',
//   icon:   <FontAwesomeIcon icon={faIdCard} />,
//   url: '/'
// },
{
  title:'Contact us',
  icon:   <FontAwesomeIcon icon={faAddressBook} />,
  url: '/contact'
},

]

function Menu(props){
  return (
    <>
      <li key={props.i}>
      <NavLink to={props.url} activeClassName="active">
      <span className="sideIcon">
      {props.icon}
      </span>
      {props.title}
      </NavLink>
      </li>
    </>
  )
}
export default function SideBar(props) {
  return (
    <>
      <div className="sideBar">
        <div className="sideBar_inner_content">
          <div className="sidebar_upperContent">
            <div className="logo">
              <h2>Vaibhav Thakur</h2>
            </div>
            <div className="sideMenu">
              <ul>
              {menu.map((m,i)=><Menu title = {m.title} key={i} url = {m.url} icon = {m.icon}/>)}
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
          <div class="socialIcon">
                <ul>
                    <li> <a href="https://github.com/vibhuthakur9911" target="_blank" aria-label="Go to github"> <i class="fab fa-github"></i></a>
                    </li>
                    <li> <a href="https://www.linkedin.com/in/vaibhav-thakur9911/" target="_blank" aria-label="Visit to Linkedin"> <i class="fab fa-linkedin"></i></a></li>

                    <li> <a href="https://www.instagram.com/mr.rajput12o8/" target="_blank" aria-label="Visit to instagram"> <i class="fab fa-instagram"></i></a></li>

                    <li> <a href="https://twitter.com/vibhuvibes" target="_blank" aria-label="Visit to instagram"> 
                    <i class="fa-brands fa-x-twitter"></i></a></li>
                    {/* <li> <a href="https://twitter.com/vibhuvibes" aria-label="say hi on fa-whatsapp" target="_blank">
                    <img src="assets/img/x-twitter.svg" alt=""/></a></li> */}

                  {/* <li> <a href="https://wa.me/919911069091?text=Hii" aria-label="say hi on fa-whatsapp" target="_blank"> <i class="fa fa-whatsapp"></i></a></li>  */}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
