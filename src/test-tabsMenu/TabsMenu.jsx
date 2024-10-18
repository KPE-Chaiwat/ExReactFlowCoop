// TabMenu.js
import React, { useState } from "react";
import styles from "./TabsMenu.module.css"; // Optional for styling

const TabMenu = () => {
  // Define the state for the active tab
  const [activeTab, setActiveTab] = useState("Tab1");

  // Function to switch tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer}>
      {/* Tab buttons */}
      <div className={styles.tabButtons}>
        <button
          className={activeTab === "Tab1" ? styles.active : ""}
          onClick={() => handleTabClick("Tab1")}
        >
          Tab 1
        </button>
        <button
          className={activeTab === "Tab2" ? styles.active : ""}
          onClick={() => handleTabClick("Tab2")}
        >
          Tab 2
        </button>
        <button
          className={activeTab === "Tab3" ? styles.active : ""}
          onClick={() => handleTabClick("Tab3")}
        >
          Tab 3
        </button>
      </div>

      {/* Tab content */}
      <div className={styles.tabContent}>
        {activeTab === "Tab1" && <div>This is the content of Tab 1</div>}
        {activeTab === "Tab2" && <div>This is the content of Tab 2</div>}
        {activeTab === "Tab3" && <div>This is the content of Tab 3</div>}
      </div>
    </div>
  );
};

export default TabMenu;
