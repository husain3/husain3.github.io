import React, { useContext } from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const { isDark } = useContext(StyleContext);
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className={isDark ? "dark-mode education-heading" : "education-heading"}>Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map(school => (
            <EducationCard school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
