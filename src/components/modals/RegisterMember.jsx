import React, { useState } from 'react';
import Modal from '../common/model';
import Input from '../common/input';

function RegisterMember() {
  const [showModal, setShowModal] = useState(false);
  function handleToggle() {
    setShowModal(!showModal);
  }
  return (
    <>
      <button className="members__register__btn" onClick={handleToggle}>
        Register Member
      </button>
      {showModal ? (
        <Modal>
          <div className="modal__container">
            <div className="modal__header">
              <h3>Register Member</h3>
            </div>
            <div>
              <Input label="Enter member's name" />
            </div>
            <button onClick={handleToggle}>Close</button>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
export default RegisterMember;
