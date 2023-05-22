import React, { useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// data
import Data from "../data/projects.json";
import ProjectCards from "../components/ProjectCards";

export default function Projects() {
  const projectTypes = Data.projects;

  const [active, setActive] = useState(null);
  const [changeCategory, setChangeCategory] = useState(null);

  const filterToggle = projectTypes.filter((item) => {
    return changeCategory === null || changeCategory === item.category;
  });

  const toggleCategory = (value) => {
    setChangeCategory(value);
    setActive(value);
  };

  return (
    <AnimatedPage>
      <div className="extendedContainer">
        <h1>Projects</h1>
        <div className="filterContainer">
          <div>
            <p>Select a category:</p>
            <button className="textButton" onClick={() => toggleCategory(null)}>
              Reset all
            </button>
          </div>

          <button
            className={active === "web" ? "contactButton" : "simpleButton"}
            onClick={() => toggleCategory("web")}
          >
            Webpages & layouts
          </button>
          <button
            className={active === "ui" ? "contactButton" : "simpleButton"}
            onClick={() => toggleCategory("ui")}
          >
            Wireframes
          </button>
          <button
            className={
              active === "microsoft" ? "contactButton" : "simpleButton"
            }
            onClick={() => toggleCategory("microsoft")}
          >
            Microsoft
          </button>
        </div>
        <TransitionGroup className="project-cards-container filteredItemCollection">
          {filterToggle.map((item) => (
            <CSSTransition key={item.name} timeout={500} classNames="slide">
              <ProjectCards
                name={item.name}
                date={item.date}
                image={item.image}
                url={item.url}
                category={item.category}
                technologies={item.technologies}
                mainphoto={item.mainphoto}
                cardphoto={item.cardphoto}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </AnimatedPage>
  );
}
