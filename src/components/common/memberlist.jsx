/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import React from 'react';
import Table from 'react-bootstrap/Table';
import { FiEdit } from 'react-icons/fi';
import DeleteModal from '../modals/DeleteModal';
import EmptyList from './EmptyList';

function MemberList({ memberList }) {
  return (
    <div className="memberlist__container">
      {memberList.length > 0 ? (
        <Table responsive className="member__table">
          <thead>
            <tr className="member__heading">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company Id</th>
              <th>Joining Date</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map((member) => (
              <tr key={member.member_id} className="member__info">
                <td className="id">{member.member_id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.company_id}</td>
                <td>{member.joining_date.slice(0, 10)}</td>
                <td>{member.last_login || '-'}</td>
                <td className="edit">
                  <FiEdit className="image" /> Edit
                </td>
                <td className="edit">
                  <DeleteModal
                    msg="Member will be deleted. Are you sure?"
                    id={member.member_id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyList msg="No Members in the Company" />
      )}
    </div>
  );
}

export default MemberList;
