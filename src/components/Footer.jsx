import React from "react";

export default function Footer({ handleToggleModel, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title} </h2>
      </div>
      <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
