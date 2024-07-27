import React from "react";
import "./Resume.css";
import { IoBookOutline } from "react-icons/io5";
import {
  educationData,
  experienceData,
  skillsDataNew,
} from "../../../../Constants";
import EducationCard from "../EducationCard/EducationCard";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import SkillItemNew from "../SkillItemNew/SkillItemNew";

const Resume = () => {
  return (
    <div className="content-body">
      <h2 className="content-head">Resume</h2>
      <div>
        <div className="resume-head-conatiner flex-align">
          <div className="resume-book-icon">
            <IoBookOutline />
          </div>
          <h3 className="h3-title">Education</h3>
        </div>
        <div className="educations-container">
          {educationData.map((item, i) => (
            <EducationCard data={item} key={i} />
          ))}
        </div>
        <div className="resume-head-conatiner flex-align">
          <div className="resume-book-icon">
            <IoBookOutline />
          </div>
          <h3 className="h3-title">Experience</h3>
        </div>
        <div className="educations-container">
          {experienceData.map((item, i) => (
            <ExperienceCard data={item} key={i} />
          ))}
        </div>
        <h3 className="h3-title">My Skills</h3>
        <ul className="skills-container-new">
          {skillsDataNew.map((item, i) => (
            <SkillItemNew data={item} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
