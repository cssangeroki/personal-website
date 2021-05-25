import React from "react";
import "./Content.css";
import Typewriter from "typewriter-effect";
import { isMobile } from "react-device-detect";

function Content(props) {
  return (
    <div>
      <div
        id="home"
        className={isMobile ? "home-style home-style-mobile" : "home-style"}
      >
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .typeString("claudio")
                .changeDelay(200)
                .typeString(" koesnadi")
                .start();
            }}
          />
        </h1>
      </div>
      <div
        id="about"
        className={isMobile ? "about-style about-style-mobile" : "about-style"}
      >
        <div
          className={isMobile ? "about-text about-text-mobile" : "about-text"}
        >
          <h1
            className={
              isMobile ? "about-header about-header-mobile" : "about-header"
            }
          >
            about me.
          </h1>
          hey! my name's claudio and i'm a software engineer. i have a
          bachelor's in computer science and i am extremely passionate about
          machine learning and artificial intelligence.
        </div>
        <div
          className={
            isMobile ? "picture-dark picture-dark-mobile" : "picture-dark"
          }
        ></div>
      </div>

      <div id="project" className="project-style">
        <div>
          <h1 className="project-header">projects.</h1>
          <div className="project-text"></div>
        </div>
      </div>

      <div id="contact" className="contact-style">
        <div>
          <h1 className="contact-header">contact section</h1>
          <div className="contact-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            voluptate sapiente possimus? Magni porro, consectetur excepturi
            quibusdam amet recusandae reiciendis error assumenda labore sed
            voluptates in deleniti, atque doloribus explicabo! Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Accusantium aliquid vitae
            reiciendis in suscipit possimus dolore recusandae eius iusto,
            pariatur odit veniam, maxime ducimus sequi adipisci quam ipsa?
            Delectus, quos.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
