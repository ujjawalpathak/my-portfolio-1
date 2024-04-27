import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './style/experience.css'

const experiences = [
  {
    id: 1,
    title: "DevOps Engineer Intern",
    company: "Silicon Labs, Austin TX",
    duration: "2022 - 2024",
    descriptions: [
        "Led the migration of CAD software from RHEL-7 to RHEL-9, importing and configuring certificates and packages. This saved approximately $180,000 by avoiding the purchase of a new software subscription.",
        "Created Ansible playbooks to enforce centralized system policies across Linux based servers nodes and SSL certificate rotation. Scripted scheduled release with Ansible Tower inventory script.",
        "Developed tooling utility for managing HPC Server IAM, enabling validation of user access, providing disk space and project group information using React, Flask and Bash.",
        "Initiated Proof of Concept (POC) to containerize Silicon Labs IDE using Docker, aiming to make it cross-platform and reduce the effort required for managing it across various systems.",
    ],
    imageUrl: "./Silabs.svg",
  },
  {
    id: 2,
    title: "Senior DevOps Engineer",
    company: "Thoughtworks",
    duration: "2021 - 2022",
    descriptions: [
        "Architected infrastructure on Vmware using Terraform, Vault and Ansible to support customer data platforms for a leading Indian bank with P99 latency.",
        "Configured Kubernetes clusters with service accounts, operators, and autoscaling to improve accessibility and scalability. Enhanced monitoring and observability through Prometheus, Grafana and ELK.",
        "Achieved a 40% reduction in production deployment time by automating application build, testing and deployment using Docker, Helm and CI/CD pipelines. Saved compute resources by running CI/CD pipelines on demand agents.",
        "Designed a change data capture platform using Debezium and Kafka for reliable data replication. Additionally, hosted Trino and Superset for data validation and testing.",
        "Enhanced software security by creating Python scripts to scan vulnerabilities in source code, applications, and containers, utilizing Checkmarx, Whitesource and Twistlock.",
    ],
    imageUrl: "./Thoughtworks.png",
  },
  {
    id: 3,
    title: "Senior DevOps Engineer",
    company: "Accern",
    duration: "2014 - 2018",
    descriptions: [
        "Worked on comprehensive Cloud Formation template for the Accern SaaS product launch on the AWS Marketplace.",
        "Executed Over-provisioning of cluster nodes to reduce deployment time along with KEDA and horizontal autoscaling.",
    ],
    imageUrl: "./Accern.svg",
  },
  {
    id: 4,
    title: "DevOps & Platform Engineer",
    company: "Atos",
    duration: "2021 - 2022",
    descriptions: [
        "Successfully migrated on-premise project infrastructure on AWS. Implemented CloudFormation to provision platforms for networking (VPC, Subnets, Peering), deployment (EKS, ECS), databases (RDS, S3) and data streaming (EMR, Lambda).",
        "Created scalable data platform involving Kafka, NiFi and Cassandra cluster with independent volumes for data and logs. Automated setup and configuration using Python and Ansible playbooks making it idempotent.",
        "Deployed services to EKS using Helm charts. Configured Prometheus queries, Grafana dashboards and ELK for monitoring and observability. Enabled Ingress to expose services and integrated Load Balancer with Route53 for DNS.",
        "Optimized software delivery by implementing Jenkins scripts for application build, test and deployment. Automated Docker build and push to ECR, code linting using Sonarqube and planned release with version control.",
        "Developed Python scripts for data ingestion to Kafka and Java based API for data transformation and mapping using NiFi and Cassandra ensuring 99.5% data consistency and persistence.",
        "Created jump host to access private instances through NAT Gateway using Apache Guacamole.",
    ],
    imageUrl: "./Atos.svg",
  },
];

const ExperienceEntry = ({ exp, animate }) => (
    <div className={`experience-entry ${animate ? 'fade-in' : ''}`}>
      <div className="experience-logo-container">
        <img src={exp.imageUrl} alt={`${exp.company} logo`} className="experience-logo" />
      </div>
      <div className="experience-text">
        <div className="experience-header">
          <div>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-title">{exp.title}</div>
          </div>
          <div className="experience-dates">{exp.duration}</div>
        </div>
        <ul className="experience-descriptions">
          {exp.descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  const Experience = () => {
    const [animateId, setAnimateId] = useState(null);
  
    const onEnter = (experienceId) => {
      setAnimateId(experienceId);
    };
  
    return (
      <div className="card">
        <div className="card-header">
          <FontAwesomeIcon icon={faBriefcase} size="lg" />
          <span>Professional Experience</span>
        </div>
        <div className="card-body">
          {experiences.map(exp => (
            <Waypoint key={exp.id} onEnter={() => onEnter(exp.id)}>
              <div> {/* Adding a div here to resolve the error */}
                <ExperienceEntry exp={exp} animate={animateId === exp.id} />
              </div>
            </Waypoint>
          ))}
        </div>
      </div>
    );
  };
  
  export default Experience;