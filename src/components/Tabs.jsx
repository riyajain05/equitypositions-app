import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="tabs">
    <button
      onClick={() => setActiveTab("form")}
      className={activeTab === "form" ? "tab active" : "tab"}
    >
      Submit Trade
    </button>
    <button
      onClick={() => setActiveTab("positions")}
      className={activeTab === "positions" ? "tab active" : "tab"}
    >
      View Positions
    </button>
  </div>
);

export default Tabs;