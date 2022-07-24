import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [col, setCol] = useState("#410f48");

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <input
          className="mx-4"
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={() => {
              setCol(document.getElementById("favcolor").value);
            }}
          />

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.modeCheck(col);
              }}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {`${props.mode} mode`}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string,
  modeCheck: PropTypes.any,
};

export default NavBar;
