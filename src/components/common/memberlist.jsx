import React from 'react';
import Table from 'react-bootstrap/Table';
import { FiMoreHorizontal } from 'react-icons/fi';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function MemberList({ memberList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="memberlist__container">
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
                <FiMoreHorizontal className="image" onClick={handleClick} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="menu"
      >
        <MenuItem onClick={handleClose}>More</MenuItem>
      </Menu>
    </div>
  );
}

export default MemberList;
