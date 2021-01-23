import React, { useEffect, useState } from 'react';
import { memberService } from '../services';
import MemberList from './common/memberlist';

function Members() {
  const [memberList, setMemberList] = useState([]);
  useEffect(() => {
    async function getMembersList() {
      const result = await memberService.getAllMembers();
      setMemberList(result.data);
    }
    getMembersList();
  }, []);

  return (
    <div className="members__container">
      <div className="members__heading">
        <div className="members__title">
          <h4>Members</h4>
        </div>
        <div className="members__btn">
          <button className="members__register__btn">Register Member</button>
        </div>
      </div>
      <div className="members__list">
        <MemberList memberList={memberList} />
      </div>
    </div>
  );
}

export default Members;
