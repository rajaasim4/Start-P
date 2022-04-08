import React from "react";
import "../Stylesheet/Features.css";
import FeaturesImages from "./FeaturesImages";
const Features = () => {
  return (
    <>
      <div className="Features">
        <div className="main-heading">
          <h1>Awesome Features</h1>
          <p>
            Built with React.js, Next.js & Sass Friendly Support Powerful Design
          </p>
        </div>
        <div className="Features-Main-section">
          {FeaturesImages.map((Val, index) => {
            const { description, src } = Val;
            return (
              <div className="Features-sub-section" key={index}>
                <img src={src} alt="Images" />
                <div className="Features-sub-heading">
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

export default Features;
