import React from 'react';
import Table from 'react-bootstrap/Table';
import { FiEdit } from 'react-icons/fi';

function MemberList({ memberList }) {
  return (
    <div className="memberlist__container">
      <Table responsive className="member__table">
        <thead>
          <tr className="member__heading">
            <th>Member Id</th>
            <th>Member Name</th>
            <th>Member Email</th>
            <th>Company Id</th>
            <th>Joining Date</th>
            <th>Last Login</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((member) => (
            <tr key={member.member_id} className="member__info">
              <td>{member.member_id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.company_id}</td>
              <td>{member.joining_date.slice(0, 10)}</td>
              <td>{member.last_login || '-'}</td>
              <td className="edit">
                <FiEdit className="image" />
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MemberList;
