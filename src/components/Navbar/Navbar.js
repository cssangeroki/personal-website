import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Link as LinkScroll } from "react-scroll";
import ThemeButton from "./ThemeButton";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar-wrap">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            onToggle={showSidebar}
            className="burger-icon"
          ></Hamburger>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul id="nav-items" className="nav-menu-items">
          <li>
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              className="navbar-text"
            >
              home
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              className="navbar-text"
            >
              about
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="project"
              spy={true}
              smooth={true}
              className="navbar-text"
            >
              projects
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              className="navbar-text"
            >
              contact
            </LinkScroll>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
