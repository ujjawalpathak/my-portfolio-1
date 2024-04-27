import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import './styles/education.css';

const EducationCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                <FontAwesomeIcon icon={faUniversity} size="lg" />
                <span>Education</span>
            </div>
            <div className="card-body">
                {/* Education Entry: Stony Brook */}
                <div className="education-entry">
                    <img
                        src="./SBU_logo.svg"
                        alt="Stony Brook University"
                        className="education-logo"
                    />
                    <div className="education-info">
                        <div className="education-name">Stony Brook University - SUNY, New York</div>
                        <div className="education-degree">MS Computer Engineering</div>
                        <div className="education-courses">Relevant Courses: Advanced Algorithms, Machine Learning</div>
                    </div>
                    <div className="education-dates">2022 - 2024</div>
                </div>
                {/* Education Entry: IIIT Bangalore */}
                <div className="education-entry">
                    <img
                        src="./iiitb_logo.svg" // Make sure to replace with actual image path
                        alt="IIIT"
                        className="education-logo"
                    />
                    <div className="education-info">
                        <div className="education-name">Indian Institute of Technology - IIIT, Bangalore</div>
                        <div className="education-degree">Post Graduate Program in Software Developmenent with Big Data</div>
                        <div className="education-courses">Relevant Courses: Advanced Algorithms, Machine Learning</div>
                    </div>
                    <div className="education-dates">2021 - 2022</div>
                </div>
                {/* Education Entry: RIT Bangalore */}
                <div className="education-entry">
                    <img
                        src="./ramaiah.svg" // Make sure to replace with actual image path
                        alt="RIT Bangalore"
                        className="education-logo"
                    />
                    <div className="education-info">
                        <div className="education-name">Ramaiah Insitute of Technology, Bangalore</div>
                        <div className="education-degree">Bachelor of Engineering in Electrical and Electronics</div>
                        <div className="education-courses">Relevant Courses: Advanced Algorithms, Machine Learning</div>
                    </div>
                    <div className="education-dates">2014 - 2018</div>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
