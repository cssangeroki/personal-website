import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
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
        <ul className="nav-menu-items">
          <ThemeButton />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
