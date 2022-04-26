import "./Contact.scss";
import Loader from "react-loaders";
import { useState, useEffect, useRef } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
//https://react-leaflet.js.org/ => map link
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const formRef = useRef();
  const aboutMe = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    // this function will call at the end of text-animate class's action after 4.5 s
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.com/docs/examples/reactjs/
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current, // form tag ref
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (res) => {
          console.log(res.text);
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (err) => {
          console.log(err.text);
          alert("Failed to send, please try again");
        }
      );
  };

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

          <p>
            I an interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <p></p>
          <p></p>

          <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Faridul Islam, <br />
          Bangladesh, <br />
          Rangpur City <br />
          <span>faridulccr@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[25.717916, 89.263585]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[25.717916, 89.263585]}>
              <Popup>Faridul live's here, come over for a cup of coffee</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
