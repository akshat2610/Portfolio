import React, { useState, useEffect, createRef } from "react";
import "./ProjectCard.css";
import Button from "../button/Button"
import ColorThief from "colorthief";

export default function ProjectCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets ? descBullets.map((item) => <li className={isDark ? "subTitle dark-mode-text": "subTitle"}>{item}</li>) : null
  };

  const GetStack = ({ stack, isDark }) => {
    return stack ? stack.map((item) => 
    <div className="stack-element">
      <img src={require('../../assets/images/stack/' + item.imageName)} className="stack-image"/>
      <p>{item.name}</p>
    </div>
    ): null
  };

  return (
    <div className={isDark ? "project-card-dark":"project-card"}>
      <div style={{background: rgb(colorArrays) }} className="project-banner">
        <div className="project-blurred_div"></div>
        <div className="project-div-company">
          <h5 className="project-text-company">{cardInfo.name}</h5>
        </div>

        <img crossOrigin={"anonymous"} ref={imgRef} className="project-roundedimg" src={cardInfo.projectLogo} alt={cardInfo.name} onLoad={() => getColorArrays()}/>
      </div>
      <div className="project-text-details">
        <p className="bullet-header"> What?
          <div className={isDark ? "project-text-role dark-mode-text":"project-text-role"}>{cardInfo.desc}</div>
        </p>
        <p className="bullet-header"> Why?
          <div className={isDark ? "subTitle project-text-desc dark-mode-text":"subTitle project-text-desc"}>{cardInfo.problemStatement}</div>
        </p>
        <p>
          <span className="bullet-header"> {cardInfo.usage} </span>
          <ul>
            <GetDescBullets descBullets={cardInfo.usageBullets} isDark={isDark} />
          </ul>
        </p>
        <p>
          <span className="bullet-header"> {cardInfo.working} </span>
          <ul>
            <GetDescBullets descBullets={cardInfo.workingBullets} isDark={isDark} />
          </ul>
        </p>
        <p className="bullet-header">
          Tools
        </p>
        <div className="stack-container">
          <GetStack stack={cardInfo.stack} isDark={isDark} />
        </div>
        {/* <Button text="GitHub" href={cardInfo.link} newTab="true"/> */}
      </div>
    </div>
  );
}

//<h5 className={isDark ? "project-text-date dark-mode-text":"project-text-date"}>{cardInfo.date}</h5>