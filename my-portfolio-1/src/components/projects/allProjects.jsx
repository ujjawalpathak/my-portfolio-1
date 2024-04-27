import React from "react";
import Project from "./Project";
import INFO from "../../data/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <div className="all-projects-card">
	  <div className="card-header">
                <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
                <span>Projects</span>
            </div>
      <div className="card-body">
        {INFO.projects.map((project, index) => (
          <Project
            key={index}
            logo={project.logo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
