import React, { useState, useEffect, createRef } from "react";
import "./EducationCard.css";
import ColorThief from "colorthief";

export default function EducationCard({ cardInfo, isDark }) {
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

  return (
    <div className={isDark ? "education-card-dark":"education-card"}>
      <div style={{background: rgb(colorArrays) }} className="education-banner">
        <div className="education-blurred_div"></div>
        <div className="education-div-company">
          <h5 className="education-text-company">{cardInfo.company}</h5>
        </div>

        <img crossOrigin={"anonymous"} ref={imgRef} className="education-roundedimg" src={cardInfo.companylogo} alt={cardInfo.company} onLoad={() => getColorArrays()}/>
      </div>
      <div className="education-text-details">
        <h5 className={isDark ? "education-text-role dark-mode-text":"education-text-role"}>{cardInfo.role}</h5>
        <h5 className={isDark ? "education-text-date dark-mode-text":"education-text-date"}>{cardInfo.date}</h5>
        <p className={isDark ? "subTitle education-text-desc dark-mode-text":"subTitle education-text-desc"}>{cardInfo.desc}</p>
        <p className="bullet-header"> {cardInfo.daily} </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.dailyBullets} isDark={isDark} />
        </ul>
        <p className="bullet-header"> {cardInfo.tools} </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.toolsBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
