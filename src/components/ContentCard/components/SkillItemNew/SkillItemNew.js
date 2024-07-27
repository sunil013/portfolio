import React from "react";
import "./SkillItemNew.css";

const SkillItemNew = ({ data }) => {
  return (
    <div className="skill-item-new">
      <data.Icon className="skill-icon-new" />
      <p className="skill-name-new">{data.name}</p>
    </div>
  );
};

export default SkillItemNew;
