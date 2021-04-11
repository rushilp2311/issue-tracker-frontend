import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function IssueDetails(props) {
  const issue = props.location.state;
  console.log(issue);
  return (
    <div className="issue__details">
      <div className="back__link">
        <Link to="/issues">
          <p className="back__link-arrow">
            <span>
              <FiArrowLeft />
            </span>
            Back
          </p>
        </Link>
      </div>
      <div className="issue__header">
        <div className="title">
          <h1 className="id">#{issue.issue_id}</h1>
          <h2>{issue.issue_title}</h2>
        </div>
      </div>
      <div className="issue__body">
        <div className="issue__description">
          <h5>Description </h5>
          <p>{issue.description}</p>
        </div>
        <div className="issue__assignee">
          <p>{issue.name}</p>
        </div>
      </div>
    </div>
  );
}

export default IssueDetails;
