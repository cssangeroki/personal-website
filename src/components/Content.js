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
import { Link as LinkScroll } from "react-scroll";
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
          passionate about machine learning and artificial intelligence with a
          side interest in full-stack engineering. my hobbies include futsal,
          photography, and building too many custom mechanical keyboards i don't
          need.
          <div className="about-text-2">
            i love talking to new people and feel free to reach out and talk to
            me on my&nbsp;
            <LinkScroll
              className="about-social"
              to="social"
              spy={true}
              smooth={true}
            >
              socials
            </LinkScroll>
            !
          </div>
        </div>
        <div
          className={
            isMobile ? "picture-dark picture-dark-mobile" : "picture-dark"
          }
          style={{ transform: `translateY(${10 + offsetY * 0.15}px)` }}
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
            style={
              offsetY >= 1394
                ? { transform: `0px` }
                : { transform: `translateY(${-210 + offsetY * 0.15}px)` }
            }
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
                offsetY >= 1400
                  ? { transform: `0px` }
                  : { transform: `translateX(${-140 + offsetY * 0.1}px)` }
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
                offsetY >= 1400
                  ? { transform: `0px` }
                  : { transform: `translateY(${-70 + offsetY * 0.05}px)` }
              }
              route={"https://github.com/cssangeroki/CSE142-Machine-Learning"}
            />
            <Card
              title="rendezvous"
              body={
                "created a mobile app with flutter in order to find a midpoint between users and look at surrounding hotspots in yelp"
              }
              anim={
                offsetY >= 1400
                  ? { transform: `0px` }
                  : { transform: `translateY(${140 - offsetY * 0.1}px)` }
              }
              route={"https://github.com/cssangeroki/Rendezvous"}
            />
            <Card
              title="game ai"
              body={
                "created various ai agents in order to complete goals given in each project"
              }
              anim={
                offsetY >= 1400
                  ? { transform: `0px` }
                  : { transform: `translateX(${70 - offsetY * 0.05}px)` }
              }
              route={"https://github.com/cssangeroki/CMPM146-Game-AI"}
            />
          </div>
        </div>
      </div>
      <div
        id="social"
        className={
          isMobile ? "social-style social-style-mobile" : "social-style"
        }
      >
        <div>
          <h1 className="social-header" onClick={checkOffset}>
            socials.
          </h1>
          <div
            className={
              isMobile ? "social-text social-text-mobile" : "social-text"
            }
          >
            <a
              href="https://www.instagram.com/itsclaud.io/"
              target="_blank"
              rel="noreferrer"
              style={
                offsetY >= 2300
                  ? { transform: `0px` }
                  : { transform: `translateX(${115 - offsetY * 0.05}px)` }
              }
            >
              <AiOutlineInstagram size="1.5em" className="social-icon" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/csangeroki/"
              target="_blank"
              rel="noreferrer"
              style={
                offsetY >= 2300
                  ? { transform: `0px` }
                  : { transform: `translateX(${230 - offsetY * 0.1}px)` }
              }
            >
              <AiOutlineLinkedin size="1.5em" className="social-icon" />
              LinkedIn
            </a>
            <a
              href="https://github.com/cssangeroki"
              target="_blank"
              rel="noreferrer"
              style={
                offsetY >= 2300
                  ? { transform: `0px` }
                  : { transform: `translateX(${345 - offsetY * 0.15}px)` }
              }
            >
              <AiOutlineGithub size="1.5em" className="social-icon" />
              Github
            </a>
            <a
              href="mailto:claudkoes@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={
                offsetY >= 2300
                  ? { transform: `0px` }
                  : { transform: `translateX(${460 - offsetY * 0.2}px)` }
              }
            >
              <HiOutlineMail size="1.5em" className="social-icon" />
              claudkoes@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/18pIo608oXQ9mz1IEuN6Zw_OFKHBUGjbO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={
                offsetY >= 2300
                  ? { transform: `0px` }
                  : { transform: `translateX(${575 - offsetY * 0.25}px)` }
              }
            >
              <AiOutlineFileWord size="1.5em" className="social-icon" />
              My Resumé
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
            <p className="copyright-text">
              <AiOutlineCopyright className="copyright-icon" />
              2021 Claudio Koesnadi.
            </p>
            <p className="copyright-text-2">Built with React.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
