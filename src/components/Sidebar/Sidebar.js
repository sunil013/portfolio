import React from "react";
import "./Sidebar.css";
import { myDetails } from "../../Constants";
import ContactDetails from "./components/ContactDetails/ContactDetails";

const Sidebar = () => {
  return (
    <div className="sidebar transition-ease-2">
      <div className="avatar-container">
        <div className="avatar">
          <img
            src="/images/profile_pic.png"
            alt="sunil devabattula"
            className="avatar-img"
          />
        </div>
        <div className="info-container">
          <p className="name">{myDetails.name}</p>
          <p className="title">{myDetails.role}</p>
        </div>
      </div>
      <ContactDetails />
    </div>
  );
};

export default Sidebar;
