import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectCards(props) {
  // images
  const cardBackgroundPhotos = {
    backgroundImage: `url(${require(`../assets/project-items/${props.cardphoto}`)})`,
    backgroundSize: "cover",
  };

  return (
    <div className="outerProjectCard">
      <NavLink
        to={props.category === "web" ? `/web/${props.url}` : `/ui/${props.url}`}
      >
        <div className="projectCard">
          <div className="topCategory">
            <div className="technologyCategories">
              <span>{props.category}</span>
            </div>
          </div>
          <div className="backgroundPhoto" style={cardBackgroundPhotos}></div>
          <div className="projectDetail">
            <p>{props.name}</p>
            <div className="projectTechnologies">
              {props.technologies.map((technologies, i) => {
                return (
                  <span key={i} className="technologyCategories">
                    {technologies}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
