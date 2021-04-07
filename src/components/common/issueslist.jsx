import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllIssues } from '../../app/issuesSlice';

function IssuesList() {
  const issuelist = useSelector(selectAllIssues);

  return <div className="issuelist__container">IssueList</div>;
}

export default IssuesList;
