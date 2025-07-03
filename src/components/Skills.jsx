import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faCogs,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ paddingLeft: "0px" }}>
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        Skills
      </h2>
      <ul className="skills-list">
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          HTML
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          CSS
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          React
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          Bootstrap
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          DSA
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          Python
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          SQL
        </li>
        <li>
          <FontAwesomeIcon icon={faTerminal} className="mr-2" />
          Git
        </li>
        <li>
          <FontAwesomeIcon icon={faTerminal} className="mr-2" />
          GitHub
        </li>
      </ul>
    </section>
  );
};

export default Skills;
