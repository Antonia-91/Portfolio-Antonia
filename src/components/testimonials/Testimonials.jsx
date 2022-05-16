import React from "react";
import "./testimonials.css";


import { AiOutlineUser } from "react-icons/ai";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Testimonials</h5>
      <h2>References</h2>

      <div className="container testimonials__container">
        <div className="testimonials__content">
          <div className="testimonials__cards">
            <article className="testimonials__card">
              <AiOutlineUser className="testimonials__icon" />
              <h5>Rafeal Milanes</h5>
              <small> rafaelmilanes91@gmail.com</small>
            </article>

            <article className="testimonials__card">
              <AiOutlineUser className="testimonials__icon" />
              <h5>Jenni Pulli </h5>
              <small> jenni@medieinstitutet.se</small>
            </article>

            <article className="testimonials__card">
              <AiOutlineUser className="testimonials__icon" />
              <h5> Rickard Broberg </h5>
              <small>rickard.broberg@nordicmorning.com</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
