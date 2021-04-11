import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectAllIssues } from '../../app/issuesSlice';

function IssuesList() {
  const issuelist = useSelector(selectAllIssues);
  return (
    <div className="issuelist__container">
      {issuelist.map((issue) => (
        <div key={issue.issue_id} className="issue">
          <div className="issue__id">
            <p className="id">#{issue.issue_id}</p>
          </div>
          <div className="issue__info">
            <div className="headers">
              <h3 className="title">{issue.issue_title}</h3>
              <p className="description">{issue.description}</p>
            </div>
            <div className="assignee">
              <p>{issue.name}</p>
            </div>
            <div className="due_date">
              <p>{issue.due_date.slice(0, 10)}</p>
            </div>
          </div>
          <div className="controls">
            <Link to={{ pathname: '/issuedetails', state: issue }}>
              <h6>
                Open
                <span>
                  <FiArrowUpRight />
                </span>
              </h6>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IssuesList;
