import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import Skills from "./Skills";
import "../style.css";

const Resume = () => {
  return (
    <section id="resume" className="container text-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8">
          <h2 className="section-title ml-2">
            <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
            Resume
          </h2>
          <p className="section-description">
            Download my resume to learn more about my professional experience
            and skills.
          </p>
          <a href="/MOHANRAJ RESUME.pdf" className="resume-download-btn" download>
            Download Resume
          </a>
          {/* Include the Skills component here */}
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Resume;
