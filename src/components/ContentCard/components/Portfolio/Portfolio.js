import React, { useState } from "react";
import { projectCategories, projectsData } from "../../../../Constants";
import "./Portfolio.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(projectCategories[0].id);
  const filteredProjects =
    activeTab === projectCategories[0].id
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);
  return (
    <div className="content-body">
      <h2 className="content-head">Portfolio</h2>
      <p className="about-me portfolio-text">
        The projects you're looking at are a couple of years old. In my last
        workspace, which was a startup with a small team, I had to spend most of
        my time there.
      </p>
      <ul className="port-tabs-container">
        {projectCategories.map((item) => (
          <li
            className={`port-tab-item ${
              activeTab === item.id ? "port-active-tab" : ""
            }`}
            key={item.id}
            onClick={() => setActiveTab(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="projects-container">
        {filteredProjects.map((item) => (
          <ProjectCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
