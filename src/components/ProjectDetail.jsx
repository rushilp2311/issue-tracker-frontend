import React, { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProjectEditForm from './common/forms/projecteditform';

function ProjectDetail(props) {
  const { location } = props;
  const { state } = location;
  return (
    <div className="projectdetail__container">
      <div className="close">
        <Link to="/projects">
          <FiXCircle className="image" />
        </Link>
      </div>
      <div className="project__info__container">
        <div className="project__info__left">
          <p>{state.project_name}</p>
        </div>
        <div className="project__info__right">
          <ProjectEditForm data={state} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
