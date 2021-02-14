import React, { useState, useEffect } from 'react';
import { FiX, FiPlusCircle } from 'react-icons/fi';
import AddProjectForm from '../common/forms/addprojectform';
import Modal from '../common/modal';
import InfoCard from '../common/cards/InfoCard';
import { authService, memberService } from '../../services';

function AddProject() {
  const [showModal, setShowModal] = useState(false);
  const [memberlist, setMemberList] = useState([]);
  function handleToggle() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchData() {
      await memberService
        .getAllMembers(authService.getCurrentUser().company_id)
        .then((result) => {
          setMemberList(result.data);
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    fetchData();
  }, []);

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
              <InfoCard text="There are two major part in this Form. Fill it carefully." />
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
