import React from "react";

export default function TechnologiesUsed(props) {
  return (
    <div className="technologyContainer">
      <h5>Technologies used</h5>
      {props.technologies.map((item, i) => {
        return (
          <p className="technologyCategories" key={i}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
