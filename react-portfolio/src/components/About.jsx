/* eslint-disable */
import React from 'react';
import portfolioIcon from '../assets/images/portfolio.jpg';


const About = () => (
  <section className="about-section">
    <h2>About Me</h2>
    <img src={portfolioIcon} alt="Portfolio Icon" className="portfolio-icon" />
    <p>Hi, I'm Yeheyis! I’m a web developer with a passion for building interactive and responsive applications...</p>
  </section>
);

export default About;