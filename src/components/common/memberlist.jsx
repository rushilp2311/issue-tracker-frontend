/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { memberDeleted } from '../../app/memberSlice';
import { memberService } from '../../services';
import EmptyList from './EmptyList';

function MemberList({ memberList }) {
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    const result = await memberService.deleteMember(id);
    if (result.status === 200) {
      dispatch(memberDeleted(id));
    }
  };

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
                <td
                  className="edit"
                  onClick={() => handleDelete(member.member_id)}
                >
                  <FiTrash className="image" style={{ stroke: 'red' }} />
                  <span style={{ color: 'red' }}>Delete</span>
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
