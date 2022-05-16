import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/feadmeapp.png";
import IMG2 from "../../assets/SEOtool.png";
import IMG3 from "../../assets/dashboard.png";
import IMG4 from "../../assets/weather.png";
import IMG5 from "../../assets/multipage.png";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Explore foods from around the globe",
    github: "https://github.com/Antonia-91/FeadMeApp",
    demo: null,
  },
  {
    id: 2,
    image: IMG2,
    title:
      "This project is for the SEO team and the tools for the Market Insights Analysis",
    github: "https://github.com/Antonia-91/googleAPI",
    demo: null,
  },
  {
    id: 3,
    image: IMG3,
    title: "admin dashboard. html,css, javascript ",
    github: "https://github.com/Antonia-91/admin-dashboard-/tree/master",
    demo: "http://admindashboard.antoniaportfolio.com/",
  },

  {
    id: 5,
    image: IMG4,
    title: "API - weatherApp",
    github: "https://github.com/Antonia-91/weatherApp-2",
    demo: null,
  },
  {
    id: 6,
    image: IMG5,
    title: "API - weatherApp",
    github: "https://github.com/Antonia-91/responsive-mulit-page",
    demo: "http://multipage.antoniaportfolio.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> Just Some Of my Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h5>{title}</h5>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {demo === null ? (
                  <a className="btn btn-primary" target="_blank">
                    not live
                  </a>
                ) : (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
