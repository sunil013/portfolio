import React from "react";
import "./Styles.css";
import ContentCard from "../../components/ContentCard/ContentCard";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="page">
      <div className="section">
        <Sidebar />
        <ContentCard />
      </div>
    </div>
  );
};

export default Home;
