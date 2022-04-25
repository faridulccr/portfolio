import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import F_letter from "../../assets/images/newF2.svg";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Home.scss";
import Logo from "./Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArr = ["a", "r", "i", "d", "u", "l", ","];
  const jobArr = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    // this function will call at the end of text-animate class's action after 4.5 s
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4500);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _2`}>i,</span>
          <br />

          <span className={`${letterClass} _3`}>I</span>
          <span className={`${letterClass} _4`}>'m</span>

          <img src={F_letter} alt="developer" />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArr}
            id={5}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArr}
            id={11}
          />
        </h1>

        <h2>Full-stack Developer / JavaScript Lover</h2>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      
      <Logo />
    </div>
  );
};

export default Home;
