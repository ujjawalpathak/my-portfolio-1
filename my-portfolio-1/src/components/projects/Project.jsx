import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/project.css";

const Project = ({ logo, title, description, linkText, link }) => {
  return (
    <Link to={link} className="project-link">
      <div className="project-container">
        <div className="project-logo">
          <img src={logo} alt={`${title} logo`} />
        </div>
        <div className="project-details">
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div className="project-footer">
            <FontAwesomeIcon icon={faLink} />
            <span className="project-link-text">{linkText}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
