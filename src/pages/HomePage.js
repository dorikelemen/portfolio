import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

export default function HomePage() {
  return (
    <AnimatedPage>
      <div className="maxContainer">
        <div className="introSection">
          <h1 className="introText" style={{ color: "#B4E7CE" }}>
            Hey,
          </h1>
          <p className="introText">
            I am a dedicated and passionate<br></br> web designer, specialist &
            power platform engineer...
          </p>
          <p>...skilled in crafting captivating online experiences.</p>
          <div className="buttonContainer">
            <Link to="/projects">
              <button
                className="contactButton"
                style={{ width: "fit-content" }}
              >
                Discover my projects
              </button>
            </Link>

            <Link to="/skills">
              <button className="simpleButton" style={{ width: "fit-content" }}>
                Check what i'm good at
              </button>
            </Link>
            <Link to="/contact">
              <button className="simpleButton" style={{ width: "fit-content" }}>
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
