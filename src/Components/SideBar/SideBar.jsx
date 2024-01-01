import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Telegram, Whatsapp } from "react-bootstrap-icons";

import "./SideBar.css";

export default function SideBar({ pathName }) {
  return (
    <aside className="side-bar d-none d-xl-flex">
      <div className="sidebar-container">
        <span className="sidebar-path">{pathName}</span>

        <ul className="d-flex flex-column gap-3 m-0 p-0">
          <li>
            <Link to="/">
              <Linkedin className="social-media-icon"/>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Github className="social-media-icon"/>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Telegram className="social-media-icon"/>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Whatsapp className="social-media-icon"/>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
