import React from "react";
import { Link } from "react-router-dom";
import {
  EnvelopeFill,
  Github,
  Linkedin,
  Telegram,
} from "react-bootstrap-icons";

import "./SideBar.css";

export default function SideBar({ pathName }) {
  return (
    <aside className="side-bar d-none d-xl-flex">
      <div className="sidebar-container">
        <span className="sidebar-path">{pathName}</span>

        <ul className="d-flex flex-column gap-3 m-0 p-0">
          <li>
            <Link
              to="https://linkedin.com/in/saeid-shojaei-a8724a233"
              target="_blank"
            >
              <Linkedin className="social-media-icon" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/saeidsh777" target="_blank">
              <Github className="social-media-icon" />
            </Link>
          </li>
          <li>
            <Link to="https://t.me/saeidshojaei777" target="_blank">
              <Telegram className="social-media-icon" />
            </Link>
          </li>
          <li>
            <Link to="mailto:saeidshojaei71@gmail.com">
              <EnvelopeFill className="social-media-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
