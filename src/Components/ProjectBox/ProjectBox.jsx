import React from "react";
import "./ProjectBox.css";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
export default function ProjectBox({ srcImg, title, label, urlProject }) {
  return (
    <div className="project-box">
      <div className="project-img-box">
        <img className="project-img" src={srcImg} alt="job project" />
      </div>

      <div className="project-body-box">
        <div className="my-2 d-flex align-items-center gap-2 px-2">
          {label.map((item, index) => (
            <span key={index} className="label">
              {item}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={urlProject}
        className="project-footer-box py-3 px-4 d-flex justify-content-between align-items-center"
      >
        <h5 className="project-footer-title m-0">{title}</h5>
        <ArrowRight className="project-footer-icon" />
      </Link>
    </div>
  );
}
