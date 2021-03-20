import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProjectEditForm from './common/forms/projecteditform';

// TODO: Refactor Link params using id and Redux

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
      <div className="title">
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Edit Project</h2>
      </div>
      <div className="project__info__container">
        <ProjectEditForm data={state} />
      </div>
    </div>
  );
}

export default ProjectDetail;
