import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./SkillBox.css";
export default function SkillBox({ title, progress }) {
  return (
    <div className="skill-box">
      <div className="d-flex justify-content-between align-items-center">
        <span className="skill-title">{title}</span>
        <span className="skill-title">{progress}%</span>
      </div>

      <div className="mt-3">
        <ProgressBar now={progress} />
      </div>
    </div>
  );
}
