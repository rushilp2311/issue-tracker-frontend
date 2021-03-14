import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMembers } from '../app/memberSlice';
// import MemberList from './common/memberlist';
import RegisterMember from './modals/RegisterMember';

const MemberList = React.lazy(() => import('./common/memberlist'));

function Members() {
  const memberList = useSelector(selectAllMembers);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default Members;
