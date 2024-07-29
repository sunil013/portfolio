import React from "react";
import "./Tabs.css";
import { tabsData } from "../../../../Constants";
import { logEvent } from "../../../../config/Firebase";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-container">
      {tabsData.map((item) => (
        <button
          className={`tab-btn ${activeTab === item.id ? "active-tab" : ""}`}
          key={item.id}
          onClick={() => {
            logEvent(item.name, {});
            setActiveTab(item.id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
