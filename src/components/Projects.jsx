import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../style.css";

const Projects = () => {
  // Projects data
  const projects = [
    {
      title: "Movie Dozz",
      description: `A movie recommendation app that helps users find movies based on their preferences and ratings.
       and user can able to view the top rated movie and upcoming movies and also able to view the trailer and mostly this works with the VPN help.`,
    },
    {
      title: "GitHub Finder",
      description:
        "A web app that lets users search GitHub profiles and repositories. and helps them to direct to their profile and able to use their repos.",
    },
    {
      title: "Weather App",
      description:
        "An app that shows weather details based on the user's location or city.",
    },
    {
      title: "Todo App",
      description:
        "A simple task manager app that allows users to create, edit, and delete tasks.",
    },
    {
      title: "Tourism Website",
      description:
        "A tourism site with a minimal place designed using bootstrap.",
    },
    {
      title: "Blog",
      description:
        "A blogging site for myself where I posted some places and more.",
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
        "Completed the task and built the image gallery, calculator, and music player.",
    },
    {
      title: "Data Analyst - Cognify Technologies",
      description:
        "Analyzed and visualized data using Python, including creating reports and performing data cleansing tasks.",
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
            style={{ marginBottom: "15px", padding: "10px" }} // Increased padding here
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
