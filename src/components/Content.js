import React, { useState, useEffect } from "react";
import "./Content.css";
import Typewriter from "typewriter-effect";
import { isMobile } from "react-device-detect";
import Card from "./Card";

function Content(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis adipisci nisi fugit dolorem, pariatur natus, veritatis sequi soluta animi quia eum corrupti, necessitatibus totam alias reiciendis tenetur deleniti ullam aliquid!";

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
          hey! my name's claudio and i'm a software engineer. i have a
          bachelor's in computer science and i am extremely passionate about
          machine learning and artificial intelligence.
        </div>
        <div
          className={
            isMobile ? "picture-dark picture-dark-mobile" : "picture-dark"
          }
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        ></div>
      </div>

      <div id="project" className="project-style">
        <div>
          <h1 className="project-header" onClick={checkOffset}>
            projects.
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
                  : { transform: `translateX(${-670.4 + offsetY * 0.4}px)` }
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
                  : { transform: `translateX(${-1005.6 + offsetY * 0.6}px)` }
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
                  : { transform: `translateX(${-1340.8 + offsetY * 0.8}px)` }
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
                  : { transform: `translateX(${-1676 + offsetY * 1}px)` }
              }
              route={"https://github.com/cssangeroki/CMPM146-Game-AI"}
            />
          </div>
        </div>
      </div>

      <div id="contact" className="contact-style">
        <div>
          <h1 className="contact-header">contact section</h1>
          <div className="contact-text">{lorem}</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
