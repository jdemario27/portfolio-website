import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import myResume from '../../../assets/MyResume/DeMarioJosephResume.pdf';
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="www.linkedin.com/in/joseph-demario">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/jdemario27">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Joseph</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "Mobile Developer",
                    1000,
                    "React Developer",
                    1000,
                    "Film Enthusiast",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passion for learning new things and building applications with
                front end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{" "}
            </button>
            <a
              href={myResume}
              download="DeMarioJosephResume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
