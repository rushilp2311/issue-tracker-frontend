import React from 'react';
import AddProject from './modals/AddProject';

function Projects() {
  return (
    <div className="projects__container">
      <div className="projects__heading">
        <div className="projects__title">
          <h4>Projects</h4>
        </div>
        <div className="projects__btn">
          <AddProject />
        </div>
      </div>
    </div>
  );
}

export default Projects;
