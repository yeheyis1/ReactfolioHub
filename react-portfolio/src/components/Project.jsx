/* eslint-disable */
import React from 'react';

const Project = ({ title, image, appLink, repoLink }) => {
  
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={`${title} screenshot`} />
      <p>
        <a href={appLink} target="_blank" rel="noopener noreferrer">Live App</a> | 
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </p>
    </div>
  );
};

export default Project;
