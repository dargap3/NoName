import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import './modal.styles.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    background: '#F4F3F1',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 0,
    padding: 0,
    border: 'none',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(5px)',
  },
};

Modal.setAppElement('#root');

const ModalComponent = ({ modalIsOpen, afterOpenModal, closeModal, children, closeable = true, modalProps = {},}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Confirmación'
      {...modalProps}>
      {closeable && (
        <div className='text-right' style={{display: 'flex', justifyContent: 'flex-end'}}>
          <button className='modal__close' onClick={closeModal}>
            X
          </button>
        </div>
      )}
      {children}
    </Modal>
  );
};

ModalComponent.defaultProps = {
  afterOpenModal: () => {},
};

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  afterOpenModal: PropTypes.func,
};

export default ModalComponent;