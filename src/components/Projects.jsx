import React, { useState, useEffect } from 'react';
import { authService, projectService } from '../services';
import AddProject from './modals/AddProject';
import ProjectList from './common/projectslist';

function Projects() {
  const [projectlist, setProjectList] = useState([]);
  useEffect(() => {
    async function getProjectsList() {
      await projectService
        .getAllProjectDetails(authService.getCurrentUser().company_id)
        .then((result) => setProjectList(result.data))
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    getProjectsList();
  }, []);
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
