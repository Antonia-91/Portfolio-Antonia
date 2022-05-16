import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME2 from "../../assets/me2.png";


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I´m </h5>
        <h1>Antonia</h1>
        <h5 className="text-light"> Frontend Developer </h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME2} />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
