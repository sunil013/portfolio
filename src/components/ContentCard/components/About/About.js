import React from "react";
import "./About.css";
import { workData } from "../../../../Constants";

const About = () => {
  return (
    <div className="content-body">
      <h2 className="content-head">About Me</h2>
      <p className="about-me">
        I am a Software Development Engineer passionate about crafting dynamic
        web applications. Specializing in frontend development with React.js, I
        create intuitive interfaces that prioritize user experience.
      </p>
      <p className="about-me">
        Complementing my frontend skills, I excel in backend development using
        the Spring Boot and Node.js. My focus is on seamless integration and
        robust functionality across all layers of web applications, ensuring
        high performance and adherence to best practices.
      </p>
      <h3 className="h3-title">What I'm Doing</h3>
      <div className="work-items-container">
        {workData.map((item, i) => (
          <div className="work-item" key={i}>
            <img src={item.imageUrl} alt="webdev" width="40" />
            <div>
              <h4 className="work-name">{item.name}</h4>
              <p className="work-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
