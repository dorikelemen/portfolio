import AnimatedPage from "./AnimatedPage";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "./Swiper";
import TechnologiesUsed from "./TechnologiesUsed";

export default function ProjectPageTemplate(props) {
  const location = useLocation();
  const { pathname } = location;
  const [menuStyle, setMenuStyle] = useState("");

  useEffect(() => {
    const isHomePage =
      location.pathname === "" || location.pathname === "/contact";
    const newMenuStyle = isHomePage ? "" : "extendedContainer";
    setMenuStyle(newMenuStyle);
  }, [pathname]);

  return (
    <AnimatedPage>
      <div className="extendedContainer">
        <div>
          <h1>{props.name}</h1>
        </div>
        <siv className="keyInfoContainer">
          <p>{props.date}</p>
          <div className="highlightInformation">
            <span class="material-icons-outlined">apartment</span>
            <p>
              <span>Company:</span> {props.company}
            </p>
          </div>
          <div className="highlightInformation">
            <span class="material-icons-outlined">psychology_alt</span>
            <p>
              <span>Project:</span>
              {props.purpose}
            </p>
          </div>
        </siv>

        <div className="row">
          <div className="col-lg-4 col-md-7 col-12">
            <div className="descriptionContainer">
              <p>{props.description}</p>
              <TechnologiesUsed technologies={props.technologies} />
            </div>
          </div>
          <div className="col-lg-8 col-md-5 col-12">
            <img
              src={require("../assets/project-items/" +
                `${props.mainphoto}` +
                ".png")}
              alt={`${props.name} main image`}
              className="mainPhoto"
            ></img>
          </div>
        </div>
        <Carousel images={props.images} />
        <p>{props.category}</p>
      </div>
    </AnimatedPage>
  );
}
