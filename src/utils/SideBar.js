import React from "react";
import { IconUserCircle } from "@tabler/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, Link } from "react-router-dom";
import propTypes from "prop-types"
import {
  faUserSecret,
  faIdCard,
  faLaptopCode,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const menu = [
{
  title:'Home',
  icon:  <IconUserCircle stroke={2} />,
  url: '/'
},
{
  title:'About us',
  icon:  <IconUserCircle stroke={2} />,
  url: '/about'
},
{
  title:'Resume',
  icon:  <IconUserCircle stroke={2} />,
  url: '/resume'
},
// {
//   title:'Portfolio',
//   icon:  <IconUserCircle stroke={2} />,
//   url: '/'
// },
{
  title:'Contact us',
  icon:  <IconUserCircle stroke={2} />,
  url: '/contact'
},

]

function Menu(props){
  return (
    <>
      <li>
      <Link to={props.url}>
      <span className="sideIcon">
      {props.icon}
      </span>
      {props.title}
      </Link>
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
              {menu.map((m)=><Menu title = {m.title} url = {m.url} icon = {m.icon}/>)}
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
          <div className="sidebar_lowerContent"></div>
        </div>
      </div>
    </>
  );
}
