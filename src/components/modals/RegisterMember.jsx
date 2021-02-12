import React, { useState } from 'react';
import { FiX, FiUserPlus } from 'react-icons/fi';
import MemberRegistrationForm from '../common/forms/memberregistration';
import Modal from '../common/modal';

function RegisterMember() {
  const [showModal, setShowModal] = useState(false);
  function handleToggle() {
    setShowModal(!showModal);
  }
  return (
    <>
      <button className="members__register__btn" onClick={handleToggle}>
        <FiUserPlus
          className="image"
          style={{ marginRight: '10px', height: '20px' }}
        />{' '}
        Add Member
      </button>
      {showModal ? (
        <Modal>
          <div className="modal__container">
            <div className="modal__close">
              <FiX className="image" onClick={handleToggle} />
            </div>
            <div className="modal__header">
              <h3>Register Member</h3>
            </div>
            <div className="modal__body">
              <MemberRegistrationForm setShowModal={setShowModal} />
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
export default RegisterMember;
