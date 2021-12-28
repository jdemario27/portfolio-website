import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import education from '../../assets/Resume/education.svg';
import workhistory from '../../assets/Resume/work-history.svg';
import programmingskills from '../../assets/Resume/programming-skills.svg';
import projects from '../../assets/Resume/projects.svg';
import interests from '../../assets/Resume/interests.svg';

import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" }, //🏫
    { label: "Work History", logoSrc: "work-history.svg" }, //🧑‍💼
    { label: "Programming Skills", logoSrc: "programming-skills.svg" }, //🧑‍💻
    { label: "Projects", logoSrc: "projects.svg" }, //💻
    { label: "Interests", logoSrc: "interests.svg" }, //🎥
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 35 },
    { skill: "React.js", ratingPercentage: 80 },
    { skill: "Swift", ratingPercentage: 65 },
    { skill: "SQL", ratingPercentage: 75 },
    { skill: "Node.js", ratingPercentage: 30 },
    { skill: "MongoDB", ratingPercentage: 45 },
    { skill: "Swift", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "Git", ratingPercentage: 75}
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "December 2021", toDate: "January 2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React.js and Bootstrap",
    },
    {
      title: "CINEMAFI",
      duration: { fromDate: "January 2021", toDate: "February 2021" },
      description:
        "A movie web application designed to scroll through a list of movies to add to your favorites list",
      subHeading:
        "Technologies Used:  React.js, MongoDB, Express.js, Node.js, and Redux",
    },
    {
      title: "IntelliBudget",
      duration: { fromDate: "March 2020", toDate: "May 2020" },
      description:
        "An app that will allow people of all ages to get a grip on their finances (spending vs income). As can be seen a lot of people are cavalier with their finances, spending money everyday, and then wondering where all the money went. An app like this can be tailored to logging daily, weekly, bi-weekly income, while also tracking day to day purchases.",
      subHeading:
        "Technologies Used: Xcode, Swift and Back4App",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"CUNY College of Staten Island"}
        subHeading={"Bachelor of Science in Computer Science with a minor in Cinema Studies"}
        fromDate={"August 2018"}
        toDate={"May 2022"}
      />

      <ResumeHeading
        heading={"CodePath Tech Fellow"}
        subHeading={"Instruct and deliver content to teach computer science undergraduate students how to design, develop and build mobile iOS and Android applications"}
        fromDate={"June 2020"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Tottenville High School"}
        fromDate={"September 2014"}
        toDate={"June 2018"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"MetLife"}
          subHeading={"DevOps Engineer"}
          fromDate={"June 2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Collaborated and worked in an agile environment on real business applications for MetLife’s Corporate Treasury
          team, attended weekly professional development sessions, networked and participated in social and philanthropic events.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -<b>Shareholder Services (SHS)</b> - Assisted in the backend development of the application where I constructed excel spreadsheet
            templates to provide data modelers with the necessary changes for the database as well as constructed DML scripts
          </span>
          <br />
          <span className="resume-description-text">
            -<b>MetLife Account Validation Services (MAVS)</b> - worked on web service changes that Wells Fargo required in
            their outline and modified data elements in the existing MetLife validation API
          </span>
          <br />
          <span className="resume-description-text">
            -<b>Innovation Group Challenge</b> - worked with a team to come up with our own feature in MetLife’s newest
            financial wellness app, Upwise; we developed our prototype, using Figma, with the idea that you have easy access to opportunities to
            tap into additional sources of income 
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a coder, I also love to share my knowledge with others!"
      />
      <ResumeHeading
        heading="Movies"
        description="I love watching and analyzing movies (especially MARVEL movies)!  I always try to combine computer science and film whenever I can!"
      />
      <ResumeHeading
        heading="Sports"
        description="I like to play a variety of different sports like baseball, football and basketball.  My favorite sports team is the New York Yankees."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;