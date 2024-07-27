import React from "react";
import "./SkillItemNew.css";

const SkillItemNew = ({ data }) => {
  return (
    <li className="skill-item-new">
      <data.Icon className="skill-icon-new" />
      <p className="skill-name-new">{data.name}</p>
    </li>
  );
};

export default SkillItemNew;
