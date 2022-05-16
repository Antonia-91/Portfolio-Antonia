import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Plan, implement and present projects with usability in focus.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Set up and plan interface analyzes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create interfaces that are available.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Target group analysis and target group needs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wierframes.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsible for web development with CSS, HTML and JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Work with target group-adapted web development with regard to
                usability, accessibility and UX.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop, customize and test web solutions for different browsers
                and platforms.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Web development with a focus on different APIs and frameworks.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Project methodology and working methodology for developers.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>personal qualities</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>High work ethic.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Team player .</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Like to get feedback, positive or negative.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Stubborn.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Want to feel part of a team.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Beat you all in running.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Love my dog.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creative and happy.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
