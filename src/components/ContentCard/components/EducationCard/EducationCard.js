import React from "react";
import "./EducationCard.css";

const EducationCard = ({ data }) => {
  return (
    <div className="edu-card flex-align">
      <div className="edu-dot-conatiner flex-align">
        <div className="edu-dot" />
      </div>
      <div>
        <h4 className="edu-specia white-title">{data.specialization}</h4>
        <p className="edu-college">{data.college}</p>
        <span className="edu-time">{data.duration}</span>
      </div>
    </div>
  );
};

export default EducationCard;
