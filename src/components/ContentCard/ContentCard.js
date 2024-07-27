import React, { useState } from "react";
import "./Styles.css";
import Tabs from "./components/Tabs/Tabs";
import { tabsData } from "../../Constants";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const ContentCard = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const getActiveTab = () => {
    switch (activeTab) {
      case tabsData[1].id:
        return <Resume />;
      case tabsData[2].id:
        return <Portfolio />;
      case tabsData[3].id:
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="content-section">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {getActiveTab()}
    </div>
  );
};

export default ContentCard;
