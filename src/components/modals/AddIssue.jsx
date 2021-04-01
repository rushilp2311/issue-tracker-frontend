import React, { useState } from 'react';

import { FiX, FiPlusCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectAllMembers } from '../../app/memberSlice';
import Modal from '../common/modal';
import AddProjectForm from '../common/forms/addprojectform';
import AddIssueForm from '../common/forms/addissueform';

const InfoCard = React.lazy(() => import('../common/cards/InfoCard'));

function AddIssue() {
  const [showModal, setShowModal] = useState(false);
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
            {/* <>
              <Suspense fallback={<div>Loading...</div>}>
                <InfoCard text="There are two major part in this Form. Fill it carefully. Status of the project will be Open by default." />
              </Suspense>
            </> */}
            <div className="modal__body">
              <AddIssueForm />
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
export default AddIssue;
