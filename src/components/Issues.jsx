import React from 'react';
import AddIssue from './modals/AddIssue';

function Issues() {
  return (
    <div className="issues__container">
      <div className="issues__heading">
        <div className="issues__title">
          <h4>Issues</h4>
        </div>
        <div className="issues__btn">
          <AddIssue />
        </div>
      </div>
      {/* <div className="projects__list">
        <ProjectList projectlist={projectlist} />
      </div> */}
    </div>
  );
}

export default Issues;
