import React, { useState, Suspense } from 'react';

import { FiX, FiPlusCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectAllMembers } from '../../app/memberSlice';
import Modal from '../common/modal';
import AddProjectForm from '../common/forms/addprojectform';

const InfoCard = React.lazy(() => import('../common/cards/InfoCard'));

function AddProject() {
  const memberlist = useSelector(selectAllMembers);

  const [showModal, setShowModal] = useState(false);
  function handleToggle() {
    setShowModal(!showModal);
  }

  return (
    <>
      <button className="projects__register__btn" onClick={handleToggle}>
        <FiPlusCircle className="image" /> Add Project
      </button>
      {showModal ? (
        <Modal>
          <div className="modal__container">
            <div className="modal__close">
              <FiX className="image" onClick={handleToggle} />
            </div>
            <div className="modal__header">
              <h3>Add Project</h3>
            </div>
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <InfoCard text="There are two major part in this Form. Fill it carefully. Status of the project will be Open by default." />
              </Suspense>
            </>
            <div className="modal__body">
              <AddProjectForm memberlist={memberlist} />
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
export default AddProject;
