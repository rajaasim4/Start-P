import React, { useState } from "react";
import "../Stylesheet/Version.css";
import VersionImages from "./VersionImages";
//import html from "../Images/html.png";
const Version = () => {
  const [Images, setImages] = useState(VersionImages);
  return (
    <>
      <div className="Version">
        <div className="Version-Pages-Main-heading">
          <h1>Alternate Versions Are Available Here</h1>
        </div>
        <div className="Version-Main-section">
          {VersionImages.map((Val, index) => {
            const { src, description } = Val;
            return (
              <div className="Version-sub-section" key={index}>
                <img src={src} alt="Images" />
                <div className="Version-sub-heading">
                  <h2>{description}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Version;
