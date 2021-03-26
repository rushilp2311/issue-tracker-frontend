/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { FiX, FiTrash } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { memberDeleted } from '../../app/memberSlice';
import { memberService } from '../../services';
import Modal from '../common/modal';

function DeleteModal({ msg, id }) {
  const [showModal, setShowModal] = useState(false);
  function handleToggle() {
    setShowModal(!showModal);
  }
  const dispatch = useDispatch();
  const handleDelete = async (memberId) => {
    const result = await memberService.deleteMember(memberId);
    if (result.status === 200) {
      dispatch(memberDeleted(memberId));
      setShowModal(!showModal);
    }
  };
  return (
    <>
      <p className="members__delete__btn" onClick={handleToggle}>
        <FiTrash className="image" /> Delete
      </p>
      {showModal ? (
        <Modal>
          <div className="modal__container">
            <div className="modal__close">
              <FiX className="image" onClick={handleToggle} />
            </div>
            <div className="modal__header">
              <h3>{msg}</h3>
            </div>
            <div className="modal__body delete__modal-container">
              <button className="delete__btn" onClick={() => handleDelete(id)}>
                Delete
              </button>
              <button onClick={handleToggle} className="cancel__btn">
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default DeleteModal;
