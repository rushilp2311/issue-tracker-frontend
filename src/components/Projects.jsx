import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProjects } from '../app/projectSlice';
import AddProject from './modals/AddProject';
import ProjectList from './common/projectslist';

function Projects() {
  const projectlist = useSelector(selectAllProjects);

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
      <div className="projects__list">
        <ProjectList projectlist={projectlist} />
      </div>
    </div>
  );
}

export default Projects;
