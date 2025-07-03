// About.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../style.css";

const About = () => {
  return (
    <section id="about" className="container text-center">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            About Me
          </h2>
          <div className="profile-image-container">
            <h1 className="mt-3">MOHANRAJ M</h1>
            <img
              src="/moni.jpg"
              alt="MOHAN PIC"
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <p className="section-description mt-4">
            Hi, I’m Mohan Raj – a Biomedical Engineering student with a strong
            passion for Information Technology. As an aspiring Full-Stack
            Developer, I’ve built a solid foundation in HTML, CSS, JavaScript,
            React, Python, and SQL.
          </p>

          <div className="current-project mt-4 p-3 rounded shadow">
            <h4 className="text-primary mb-2">🚀 Current Project: NeuroNav</h4>
            <p>
              An AI-powered multi-modal accessibility tool designed to enable
              seamless web navigation for users with diverse abilities. It
              combines voice, gesture, and eye-tracking technologies to create
              an inclusive digital experience.
            </p>
          </div>

          <p className="section-description mt-4">
            Alongside this, I’m strengthening my Data Structures and Algorithms
            knowledge to prepare for IT placements and building projects that
            reflect my creativity and technical skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
