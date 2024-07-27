import React from "react";
import "./Tabs.css";
import { tabsData } from "../../../../Constants";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-container">
      {tabsData.map((item) => (
        <button
          className={`tab-btn ${activeTab === item.id ? "active-tab" : ""}`}
          key={item.id}
          onClick={() => setActiveTab(item.id)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
