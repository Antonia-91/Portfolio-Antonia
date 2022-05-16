import React from "react";
import "./footer.css";

import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ANTONIA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expeirience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/antoniapettersson/?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a href="https://github.com/Antonia-91" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Antonia Pettersson.</small>
      </div>
    </footer>
  );
};

export default Footer;
