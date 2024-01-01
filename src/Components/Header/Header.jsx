import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Envelope, List } from "react-bootstrap-icons";
import "./Header.css";

export default function Header({ setPathName }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header white-b">
      <div className="header-logo-container black-b">
        <Link className="header-logo white-t" to="/">
          SSh
        </Link>
      </div>

      <div
        className={`${
          showMenu ? "header-top-bar show-menu" : "header-top-bar"
        }`}
      >
        <nav className="header-navbar">
          <ul className="navbar-list mb-0 d-flex gap-5">
            <li className="navbar-item">
              <NavLink
                className={`navbar-link`}
                to="/"
                onClick={() => setPathName("HOMEPAGE")}
              >
                HOME
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className={`navbar-link`}
                to="/project"
                onClick={() => setPathName("PROJECTS")}
              >
                PROJECTS
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className={`navbar-link`}
                to="/blog"
                onClick={() => setPathName("BLOG")}
              >
                BLOG
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className={`navbar-link`}
                to="/contact"
                onClick={() => setPathName("CONTACT")}
              >
                CONTACT
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className={`navbar-link`}
                to="/other"
                onClick={() => setPathName("OTHER")}
              >
                OTHER
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="contact-me-btn-container black-b">
          <Link className="contact-me-btn white-t" to="/contact">
            <Envelope />
          </Link>
        </div>
        <List
          className="d-black d-xl-none btn-menu me-4"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </div>
    </header>
  );
}
