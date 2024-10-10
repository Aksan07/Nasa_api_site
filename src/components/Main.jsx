import React from "react";

export default function Main({ data }) {
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt="mars_picture" className="bgImage" />
    </div>
  );
}
