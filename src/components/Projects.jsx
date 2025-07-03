import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../style.css";

const Projects = () => {
  // Projects data
  const projects = [
   
    {
      title: "Todo App",
      description:
        "A simple task manager app that allows users to create, edit, and delete tasks.",
    },
    {
      title: "Weather App",
      description:
        "An app that shows weather details based on the user's location or city.",
    },
    {
      title: "Movie Dozz",
      description: `A movie recommendation app that helps users find movies based on their preferences and ratings. Users can view top-rated and upcoming movies, watch trailers, and more.`,
    },
    
   
    {
      title: "NeuroNav" + " (Ongoing Project)",
      description: `An AI-powered multi-modal accessibility tool designed to enable seamless web navigation for users with diverse abilities. Combines voice, gesture, and eye-tracking technologies for an inclusive digital experience.`,
    },
    
    {
      title: "GitHub Finder",
      description:
        "A web app that lets users search GitHub profiles and repositories. Helps users explore profiles and navigate directly to their repositories.",
    },
    {
      title: "Skin Disease Detection App",
      description: `A web application that detects and classifies common human skin diseases using a CNN model. It provides users with disease details, prevention tips, and treatment suggestions.`,
    },
    {
      title: "Lung Cancer Detection App",
      description: `An AI-based tool that classifies lung cancer images into benign and malignant categories using a ResNet50 model, helping doctors with faster diagnosis.`,
    },
    {
      title: "Tourism Website",
      description:
        "A tourism site with minimal design using Bootstrap showcasing popular destinations.",
    },
    {
      title: "Blog",
      description:
        "A personal blogging site where I post about tech topics and travel experiences.",
    },
    {
      title: "Calendar",
      description:
        "A web-based calendar app for managing events and reminders.",
    },
    {
      title: "Resume Generator",
      description:
        "An app that generates a personalized resume based on user input.",
    },
    {
      title: "Clock",
      description:
        "A clock app with different time zones and world clocks functionality.",
    },
    {
      title: "Currency Converter",
      description:
        "A simple app to convert currencies based on the latest exchange rates.",
    },
  ];

  // Internships data
  const internships = [
    {
      title: "Frontend Developer - Cognify Technology",
      description:
        "Worked on designing and developing user-friendly interfaces for web applications using HTML, CSS, and JavaScript.",
    },
    {
      title: "Frontend Developer - Code Alpha",
      description:
        "Completed tasks and built an image gallery, calculator, and music player as part of the internship.",
    },
    {
      title: "Data Analyst - Cognify Technologies",
      description:
        "Analyzed and visualized data using Python, created reports, and performed data cleansing tasks.",
    },
  ];

  return (
    <section id="projects" className="container text-center">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCode} className="mr-2" />
        Projects
      </h2>

      {/* First four projects in containers */}
      <div className="row">
        {projects.slice(0, 4).map((project, index) => (
          <div
            key={index}
            className="col-md-6"
            style={{ marginBottom: "15px", padding: "10px" }}
          >
            <div className="card" style={{ padding: "15px" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ marginBottom: "15px" }}>
                  {project.title}
                </h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Remaining projects as a list */}
      <div className="mt-5">
        <h3>Other Projects:</h3>
        <ul className="list-unstyled">
          {projects.slice(4).map((project, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{project.title}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Internships Section */}
      <h2 className="section-title mt-5">
        <FontAwesomeIcon icon={faCode} className="mr-2" />
        Internships
      </h2>

      {/* First two internships in containers */}
      <div className="row">
        {internships.slice(0, 2).map((internship, index) => (
          <div
            key={index}
            className="col-md-6"
            style={{ marginBottom: "30px", padding: "10px" }}
          >
            <div className="card" style={{ padding: "15px" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ marginBottom: "15px" }}>
                  {internship.title}
                </h5>
                <p className="card-text">{internship.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Remaining internships as a list */}
      <div className="mt-5">
        <h3>Other Internships:</h3>
        <ul className="list-unstyled">
          {internships.slice(2).map((internship, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{internship.title}</strong>: {internship.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
