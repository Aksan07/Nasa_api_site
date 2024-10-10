import React from "react";

export default function SideBar({ handleToggleModel, data }) {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModel} className="bgOverlay"></div>
      <div className="sidebarContents">
        <div className="descriptionContainer">
          <h2>{data.title}</h2>
          <p className="descriptionDate">{data.date}</p>
          <p>{data.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
