/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIssues } from '../app/issuesSlice';
import IssuesList from './common/issueslist';
import AddIssue from './modals/AddIssue';

function Issues() {
  const dispatch = useDispatch();
  const issueStatus = useSelector((state) => state.issues.status);
  const project_id = useSelector(
    (state) => state.members.assignedProject.project_id
  );
  useEffect(() => {
    if (issueStatus === 'idle') {
      if (project_id) {
        dispatch(fetchIssues());
      }
    }
  }, [dispatch, issueStatus, project_id]);
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
      <div className="issues__list">
        <IssuesList />
      </div>
    </div>
  );
}

export default Issues;
