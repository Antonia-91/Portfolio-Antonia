import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/Antonia-91" target="_blank">
        <FaGithub />
      </a>
      <a href="http://linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
