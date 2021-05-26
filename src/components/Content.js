import React, { useState, useEffect } from "react";
import "./Content.css";
import Typewriter from "typewriter-effect";
import { isMobile } from "react-device-detect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineCopyright,
  AiOutlineFileWord,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Card from "./Card";

function Content(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function checkOffset() {
    console.log(offsetY);
  }

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
          hey! my name's claudio and i'm a software engineer. i am extremely
          passionate about machine learning and artificial intelligence.
          currently knee-deep in building custom mechanical keyboards.
        </div>
        <div
          className={
            isMobile ? "picture-dark picture-dark-mobile" : "picture-dark"
          }
          style={{ transform: `translateY(${offsetY * 0.15}px)` }}
        ></div>
      </div>
      <div
        id="project"
        className={
          isMobile ? "project-style project-style-mobile" : "project-style"
        }
      >
        <div>
          <h1
            className={
              isMobile
                ? "project-header project-header-mobile"
                : "project-header"
            }
            onClick={checkOffset}
          >
            top projects.
          </h1>
          <div
            className={
              isMobile ? "project-cards project-cards-mobile" : "project-cards"
            }
          >
            <Card
              title="pacman ai"
              body={
                "implemented searches such as bfs, dfs, and a* search to pacman and created various ai agents"
              }
              anim={
                offsetY >= 1676
                  ? { transform: `0px` }
                  : { transform: `translateX(${-167.6 + offsetY * 0.1}px)` }
              }
              route={
                "https://github.com/cssangeroki/CSE140-Artificial-Intelligence"
              }
            />
            <Card
              title="yelp review"
              body={
                "using various machine learning models, we were able to predict the stars a person will give after a review is written"
              }
              anim={
                offsetY >= 1676
                  ? { transform: `0px` }
                  : { transform: `translateY(${-83.8 + offsetY * 0.05}px)` }
              }
              route={"https://github.com/cssangeroki/CSE142-Machine-Learning"}
            />
            <Card
              title="rendezvous"
              body={
                "created a mobile app with flutter in order to find a midpoint between users and look at surrounding hotspots in yelp"
              }
              anim={
                offsetY >= 1676
                  ? { transform: `0px` }
                  : { transform: `translateY(${167.6 - offsetY * 0.1}px)` }
              }
              route={"https://github.com/cssangeroki/Rendezvous"}
            />
            <Card
              title="game ai"
              body={
                "created various ai agents in order to complete goals given in each project"
              }
              anim={
                offsetY >= 1676
                  ? { transform: `0px` }
                  : { transform: `translateX(${83.8 - offsetY * 0.05}px)` }
              }
              route={"https://github.com/cssangeroki/CMPM146-Game-AI"}
            />
          </div>
        </div>
      </div>
      <div
        id="contact"
        className={
          isMobile ? "contact-style contact-style-mobile" : "contact-style"
        }
      >
        <div>
          <h1 className="contact-header" onClick={checkOffset}>
            socials.
          </h1>
          <div
            className={
              isMobile ? "contact-text contact-text-mobile" : "contact-text"
            }
          >
            <a
              href="https://www.instagram.com/itsclaud.io/"
              style={
                offsetY >= 2376
                  ? { transform: `0px` }
                  : { transform: `translateX(${118.8 - offsetY * 0.05}px)` }
              }
            >
              <AiOutlineInstagram size="1.5em" className="social-icon" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/csangeroki/"
              style={
                offsetY >= 2376
                  ? { transform: `0px` }
                  : { transform: `translateX(${237.6 - offsetY * 0.1}px)` }
              }
            >
              <AiOutlineLinkedin size="1.5em" className="social-icon" />
              LinkedIn
            </a>
            <a
              href="https://github.com/cssangeroki"
              style={
                offsetY >= 2376
                  ? { transform: `0px` }
                  : { transform: `translateX(${356.4 - offsetY * 0.15}px)` }
              }
            >
              <AiOutlineGithub size="1.5em" className="social-icon" />
              Github
            </a>
            <a
              href="mailto:claudkoes@gmail.com"
              style={
                offsetY >= 2376
                  ? { transform: `0px` }
                  : { transform: `translateX(${475.2 - offsetY * 0.2}px)` }
              }
            >
              <HiOutlineMail size="1.5em" className="social-icon" />
              claudkoes@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/18pIo608oXQ9mz1IEuN6Zw_OFKHBUGjbO/view?usp=sharing"
              style={
                offsetY >= 2376
                  ? { transform: `0px` }
                  : { transform: `translateX(${594 - offsetY * 0.25}px)` }
              }
            >
              <AiOutlineFileWord size="1.5em" className="social-icon" />
              my resumé
            </a>
          </div>
          <div
            className="copyright"
            style={
              isMobile
                ? { transform: `translateY(0px)` }
                : { transform: `translateY(${500 + offsetY * -0.2}px)` }
            }
          >
            <AiOutlineCopyright className="copyright-icon" />
            <p>2021 Claudio Koesnadi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
