import React from "react";

function Heading() {
  return (
    <div>
      <div className="navbar-fixed white blue-text text-darken-2">
        <nav>
          <div className="white blue-text text-darken-2 nav-wrapper">
            <a
              href="#!"
              className="white blue-text text-darken-2 brand-logo logo"
            >
              <i className="material-icons">description</i>
              <span className="hero-text">Keep</span>
            </a>
            <div className="search">
              <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons blue-text search-icon">search</i>
                </label>
                <i className="material-icons close-icon">close</i>
              </div>
            </div>
            <ul className="white blue-text text-darken-2 right hide-on-med-and-down">
              <li>
                <a className="blue-text text-darken-2" href="/">
                  <i className="material-icons">refresh</i>
                </a>
              </li>
              <li>
                <a href="https://github.com/ishandeveloper/Notes-Keeper" className="blue-text text-darken-2">
                  <i className="material-icons">code</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Heading;
