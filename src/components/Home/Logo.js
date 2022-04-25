import "./Logo.scss";
import logoF from "../../assets/images/F1.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
// import { gsap, DrawSVGPlugin } from "gsap-trial/all";

const Logo = () => {
  const bgRef = useRef();
  const outLineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    
    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });

    gsap.fromTo(
      outLineLogoRef.current,
      { drawSVG: "0" },
      { duration: 5, delay: 2, drawSVG: "100%" }
    );

    gsap.fromTo(
      solidLogoRef.current,
      {
        rotateY: 0,
        scale: 0,
        opacity: 0,
      },
      {
        delay: 2,
        rotateY: 360,
        scale: 1,
        opacity: 0.4,
        duration: 5,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={logoF} alt="logo F" />

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23.758 23.758"
      >
        <g className="svg-container" fill="none">
          <path
            d="M4.523,23.758V0h14.712v4.021H9.319v5.625h9.916v4.016H9.319v10.096H4.523z"
            ref={outLineLogoRef}
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
