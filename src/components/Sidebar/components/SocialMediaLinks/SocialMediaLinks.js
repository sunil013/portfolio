import React from "react";
import "./SocialMediaLinks.css";

const SocialMediaLinks = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="media-link"
    >
      <data.Icon />
    </a>
  );
};

export default SocialMediaLinks;
