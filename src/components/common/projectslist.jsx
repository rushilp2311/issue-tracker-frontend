import React from 'react';
import Table from 'react-bootstrap/Table';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ProjectList({ projectlist }) {
  return (
    <div className="memberlist__container">
      <Table responsive className="member__table">
        <thead>
          <tr className="member__heading">
            <th>Id</th>
            <th>Name</th>
            <th>Creation Date</th>
            <th>Due Date</th>
            <th>Project Admin</th>
          </tr>
        </thead>
        <tbody>
          {projectlist.map((project) => (
            <tr key={project.project_id} className="member__info">
              <td className="id">{project.project_id}</td>
              <td>{project.project_name}</td>
              <td>{project.creation_date.slice(0, 10)}</td>
              <td>{project.due_date.slice(0, 10)}</td>
              <td>{project.name}</td>
              <td className="edit">
                <Link to={{ pathname: '/projectdetails', state: project }}>
                  <FiEdit className="image" /> Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProjectList;
