import React from 'react';

function ProjectDetail(props) {
  const { location } = props;
  const { state } = location;
  return <div className="projectdeatil__container">{state.project_id}</div>;
}

export default ProjectDetail;
