/* eslint-disable */
import React from 'react';
import Project from './Project';
import './Portfolio.css';
import weatherDashboardImage from '../assets/images/weather-dashboard.jpg';


const projects = [
  {
    title: 'Weather Dashboard',
    image: weatherDashboardImage,  // Ensure this path matches where you saved your image
    appLink: 'https://your-weather-app-link.com',     // Replace with actual link
    repoLink: 'https://github.com/your-github/weather-dashboard', // Replace with actual link
  },
  {
    title: 'Note Taker App',
    image: '../assets/images/note-taker.png',         // Ensure this path matches where you saved your image
    appLink: 'https://your-note-taker-app-link.com',  // Replace with actual link
    repoLink: 'https://github.com/your-github/note-taker-app', // Replace with actual link
  },
];

const Portfolio = () => (
  <section className="portfolio-section">
    <h2>Portfolio</h2>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </section>
);

export default Portfolio;
