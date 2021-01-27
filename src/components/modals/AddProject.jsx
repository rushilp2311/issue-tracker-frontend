import React, { useState } from 'react';
import MemberRegistrationForm from '../common/forms/memberregistration';
import Modal from '../common/modal';
import { ReactComponent as Close } from '../../assets/close.svg';

function AddProject() {
  const [showModal, setShowModal] = useState(false);
  function handleToggle() {
    setShowModal(!showModal);
  }
  return (
    <>
      <button className="projects__register__btn" onClick={handleToggle}>
        Add Project
      </button>
      {showModal ? (
        <Modal>
          <div className="modal__container">
            <div className="modal__close">
              <Close className="image" onClick={handleToggle} />
            </div>
            <div className="modal__header">
              <h3>Add Project</h3>
            </div>
            <div className="modal__body">
              <MemberRegistrationForm />
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
export default AddProject;
