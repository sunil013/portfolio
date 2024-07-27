import React from "react";
import "./SkillItem.css";

const SkillItem = ({ data }) => {
  return (
    <li className="skill-item">
      <div className="skill-text-container flex-align">
        <h5 className="skill-name">{data.name}</h5>
        <span className="skill-percent">{data.skill}</span>
      </div>

      <div className="skill-bar">
        <div className="skill-fill" style={{ width: data.skill }}></div>
      </div>
    </li>
  );
};

export default SkillItem;
