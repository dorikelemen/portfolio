import React from "react";

// data
import Data from "../data/projects.json";
import ProjectPageTemplate from "../components/ProjectPageTemplate";

export default function NewsApp() {
  const pageData = Data.projects;

  const projectPage = pageData.map((item) => {
    return (
      <ProjectPageTemplate
        id={item.id}
        name={item.name}
        description={item.description}
        date={item.date}
        company={item.company}
        purpose={item.purpose}
        images={item.images}
        mainphoto={item.mainphoto}
        technologies={item.technologies}
      />
    );
  });

  return projectPage[2];
}
