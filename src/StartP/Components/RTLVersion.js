import React from "react";
import "../Stylesheet/RTLVersion.css";
//import p1 from "./Images/p1.jpg";
//import p1 from "../Images/p1.jpg";
const RTLVersion = () => {
  return (
    <>
      <div className="RTLVersion">
        <div className="RTL-Pages-Main-heading">
          <h1>RTL Version</h1>
        </div>

        <div className="RTL-sub-section">
          <img src={process.env.PUBLIC_URL + "/Images/p1.jpg"} alt="Images" />
          <div className="RTL-sub-heading">
            <h2>Click to See More Demos</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default RTLVersion;
