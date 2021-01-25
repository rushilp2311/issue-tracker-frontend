import React, { useEffect, useState } from 'react';
import { memberService, authService } from '../services';
import MemberList from './common/memberlist';
import RegisterMember from './modals/RegisterMember';

function Members() {
  const [memberList, setMemberList] = useState([]);
  useEffect(() => {
    async function getMembersList() {
      const result = await memberService.getAllMembers(
        authService.getCurrentUser().company_id
      );
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
          <RegisterMember />
        </div>
      </div>
      <div className="members__list">
        <MemberList memberList={memberList} />
      </div>
    </div>
  );
}

export default Members;
