import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../style.css";

const Contact = () => {
  return (
    <section id="contact" className="container my-5">
      <h2 className="section-title text-center mb-4">Contact</h2>
      <p className="section-description text-center mb-5">
        Feel free to reach out for collaboration or inquiries.
      </p>

      <div className="row justify-content-center">
        <ul className="contact-list list-unstyled col-md-6">
          <li className="contact-item mb-4 d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon mr-3" />
            <span className="contact-text">mohanmr018@gmail.com</span>
          </li>
          <li className="contact-item mb-4 d-flex align-items-center">
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon mr-3" />
            <span className="contact-text">LinkedIn</span>
          </li>
          <li className="contact-item mb-4 d-flex align-items-center">
            <FontAwesomeIcon icon={faGithub} className="contact-icon mr-3" />
            <span className="contact-text">GitHub</span>
          </li>
          <li className="contact-item mb-4 d-flex align-items-center">
            <FontAwesomeIcon icon={faPhone} className="contact-icon mr-3" />
            <span className="contact-text">8667289938</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
