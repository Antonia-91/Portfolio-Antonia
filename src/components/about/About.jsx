import React from "react";
import "./about.css";

import ME2 from "../../assets/me-about.png";
import { MdSchool } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Frontend Developer Medieinstitutet</h5>
              <small>Medieinstitutet</small>
            </article>

            <article className="about__card">
              <FaBookOpen className="about__icon" />
              <h5>Digital Marketing </h5>
              <small> IHM Business School</small>
            </article>

            <article className="about__card">
              <FaBookOpen className="about__icon" />
              <h5> Goals & Analytics </h5>
              <small>IHM Business School</small>
            </article>
          </div>

          <p>
            I am a Junior developer and long for someone who dares to invest in
            us juniors! Mainly have knowledge in front-end development such as
            JavaScript, css, APIs, frameworks such as React, Angular, Vue. Also
            have an eye for UX and design. In backend I have knowledge mainly in
            node js, mySql, Sql, mongoDB. I understand how to build single-page
            applications. Knowledge of device testing. Can communicate and write
            fluently in Swedish and English. I am flexible and thrive in Agile
            projects.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
