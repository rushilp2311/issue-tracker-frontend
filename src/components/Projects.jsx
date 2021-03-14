import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects, selectAllProjects } from '../app/projectSlice';
import AddProject from './modals/AddProject';
import ProjectList from './common/projectslist';

function Projects() {
  const dispatch = useDispatch();
  const projectStatus = useSelector((state) => state.projects.status);
  const projectlist = useSelector(selectAllProjects);

  useEffect(() => {
    document.title = 'Issue Tracker';
    if (projectStatus === 'idle') {
      dispatch(fetchProjects());
    }
  }, [dispatch, projectStatus]);
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
