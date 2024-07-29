import React from "react";
import "./SocialMediaLinks.css";
import { logEvent } from "../../../../config/Firebase";

const SocialMediaLinks = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="media-link"
      onClick={() => logEvent(`${data.name}_clicked`, {})}
    >
      <data.Icon />
    </a>
  );
};

export default SocialMediaLinks;
