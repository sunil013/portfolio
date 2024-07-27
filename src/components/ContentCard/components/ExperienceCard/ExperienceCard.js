import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ data }) => {
  return (
    <div className="edu-card flex-align">
      <div className="edu-dot-conatiner flex-align">
        <div className="edu-dot" />
      </div>
      <div>
        <h4 className="edu-specia white-title">
          {data.company} ({data.role})
        </h4>
        <span className="edu-time">{data.duration}</span>
        <p
          className="exp-description"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
