import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import "./ProjectCard.css";
import { logEvent } from "../../../../config/Firebase";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card active">
      <div className="project-image">
        <div className="project-icon-container transition-ease-1">
          {data.previewLink && (
            <a
              href={data.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logEvent(`${data.title}_view_site`, {})}
            >
              <div className="project-icon">
                <AiFillEye />
              </div>
            </a>
          )}
          {data.githubLink && (
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logEvent(`${data.title}_view_git`, {})}
            >
              <div className="project-icon">
                <FiGithub />
              </div>
            </a>
          )}
        </div>
        <img
          src={data.imageUrl}
          className="transition-ease-1"
          alt={`project ${data.title}`}
          loading="lazy"
        />
      </div>
      <h3 className="project-title">{data.title}</h3>
      <p className="project-category">{data.category}</p>
    </div>
  );
};

export default ProjectCard;
