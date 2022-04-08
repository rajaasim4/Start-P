import React, { useState } from "react";
import "../Stylesheet/Pages.css";
//import p1 from "../Images/p1.jpg";
import PagesImages from "./PagesImages";
const Pages = () => {
  let description = "aasdadas";
  const [data, setdata] = useState(PagesImages);
  return (
    <>
      <div className="Pages">
        <div className="Pages-Main-heading">
          <h1>Home Pages</h1>
        </div>
        <div className="Pages-sub">
          {data.map((Val, index) => {
            const { path, description } = Val;
            return (
              <div className="sub-section" key={index}>
                <img src={path} alt="Images" />
                <div className="sub-heading">
                  <h2>{description}</h2>
                </div>
              </div>
            );
          })}
          {/* <div className="sub-section">
            <img src={p1} alt="Images" />
            <div className="sub-heading">
              <h2>{description}</h2>
            </div>
          </div>
          <div className="sub-section">
            <img src={p1} alt="Images" />
            <div className="sub-heading">
              <h2>{description}</h2>
            </div>
          </div>
          <div className="sub-section">
            <img src={p1} alt="Images" />
            <div className="sub-heading">
              <h2>{description}</h2>
            </div>
          </div>
          <div className="sub-section">
            <img src={p1} alt="Images" />
            <div className="sub-heading">
              <h2>{description}</h2>
            </div>
          </div>
          <div className="sub-section">
            <img src={p1} alt="Images" />
            <div className="sub-heading">
              <h2>{description}</h2>
            </div>
          </div>
          <div className="sub-section">
            <img src={p1} alt="Images" />
            <div className="sub-heading">
              <h2>{description}</h2>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Pages;
