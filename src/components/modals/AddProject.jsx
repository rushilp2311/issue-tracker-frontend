import React, { useState } from 'react';
import { FiX, FiPlusCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectAllMembers } from '../../app/memberSlice';
import Modal from '../common/modal';

const InfoCard = React.lazy(() => import('../common/cards/InfoCard'));
const AddProjectForm = React.lazy(() =>
  import('../common/forms/addprojectform')
);

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
              <InfoCard text="There are two major part in this Form. Fill it carefully. Status of the project will be Open by default." />
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
