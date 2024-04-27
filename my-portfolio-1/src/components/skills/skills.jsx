import React from 'react';
import './styles/skills.css'; // Ensure this stylesheet is linked

const Skills = () => {
  const programmingSkills = [
    { name: "Python", imageUrl: "./Python.svg" },
    { name: "Java", imageUrl: "./Java.svg" },
    { name: "JavaScript", imageUrl: "./JS.svg" },
    { name: "Go", imageUrl: "./Go.svg" },
    { name: "C++", imageUrl: "./C++.svg" },
    { name: "C", imageUrl: "./C.svg" }
  ];

  const devOpsSkills = [
    { name: "AWS", imageUrl: "/path/to/aws-icon.jpg" },
    { name: "Docker", imageUrl: "/path/to/docker-icon.jpg" },
    { name: "Kubernetes", imageUrl: "/path/to/kubernetes-icon.jpg" },
    { name: "Ansible", imageUrl: "/path/to/ansible-icon.jpg" }
  ];

  const certifications = [
    "/path/to/aws-certification-image.jpg",
    "/path/to/java-certification-image.jpg",
    "/path/to/sql-certification-image.jpg"
  ];

  return (
    <div className="skills-card">
      <div className="card-header">
        <h2>Technical Skills</h2>
      </div>
      <div className="card-body">
        <div className="skill-section">
          <div className="skill-heading">Programming</div>
          <div className="skills-row">
            {programmingSkills.map((skill, index) => (
              <div key={index} className="tech-skill">
                <img src={skill.imageUrl} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-section">
          <div className="skill-heading">DevOps/Cloud</div>
          <div className="skills-row">
            {devOpsSkills.map((skill, index) => (
              <div key={index} className="tech-skill">
                <img src={skill.imageUrl} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-section">
          <div className="skill-heading">Certifications</div>
          <div className="skills-row">
            {certifications.map((certImg, index) => (
              <img key={index} src={certImg} alt={`Certification ${index + 1}`} className="certification-image"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
