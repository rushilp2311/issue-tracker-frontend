import React, { useState } from 'react';

import { FiX, FiPlusCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Modal from '../common/modal';
import AddIssueForm from '../common/forms/addissueform';

function AddIssue() {
  const [showModal, setShowModal] = useState(false);
  const assignedProject = useSelector((state) => state.members.assignedProject);
  function handleToggle() {
    setShowModal(!showModal);
  }

  return (
    <>
      <button className="issue__add__btn" onClick={handleToggle}>
        <FiPlusCircle className="image" /> Report Issue
      </button>
      {showModal ? (
        <Modal>
          <div className="modal__container">
            <div className="modal__close">
              <FiX className="image" onClick={handleToggle} />
            </div>
            <div className="modal__header">
              <h3>Report an Issue</h3>
            </div>
            <div className="modal__body">
              <AddIssueForm project_id={assignedProject.project_id} />
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
export default AddIssue;
