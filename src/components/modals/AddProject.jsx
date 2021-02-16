import React, { useState, useEffect } from 'react';
import { FiX, FiPlusCircle } from 'react-icons/fi';
import Modal from '../common/modal';
import { authService, memberService } from '../../services';

const InfoCard = React.lazy(() => import('../common/cards/InfoCard'));
const AddProjectForm = React.lazy(() =>
  import('../common/forms/addprojectform')
);

function AddProject() {
  const [showModal, setShowModal] = useState(false);
  const [memberlist, setMemberList] = useState([]);
  function handleToggle() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    // TODO: ADD REDUX STORE TO REDUCE API CALLS
    async function fetchData() {
      await memberService
        .getAllMembers(authService.getCurrentUser().company_id)
        .then((result) => {
          setMemberList(result.data);
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
