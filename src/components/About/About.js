import "./About.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const aboutMe = ["A", "b", "o", "u", "t", " ", "M", "e"];

  useEffect(() => {
    // this function will call at the end of text-animate class's action after 4.5 s
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutMe}
            id={1}
          />
        </h1>
        {/* how ambitious I am */}
        <p>
          I'm a very passionate person, especially when it comes time to learn
          new technologies from young age.{" "}
          <span style={{ color: "#ffd700" }}>
            I'm also passionate about making error-free websites with 100%
            client satisfaction.
          </span>
        </p>
        {/* how confident I am */}
        <p>
          I have been attracted by technology and how tools work, things growing
          etc. I have already learned HTML, CSS, JavaScript, TypeScript, React
          Js, Node Js, Express Js, Bootstrap, Tailwind, MongoDB/SQL for two
          years and more and continue learnig to improve my coding knowledge.
        </p>
        {/* how defination I am */}
        <p>
          I am spending so much time to improve my web development skills. Every
          day I want to learn something new, actaully I love to write code.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default About;
