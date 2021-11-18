import React from 'react';
import './Modal.css';

const Modal = (props) => {
  const { closeModal } = props;

  const closeicon = () => (
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" variant="outline-danger"
    
    onClick={closeModal}
    style={{
      color: '#000000',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: 'black',
      border: 0,
      position: 'absolute',
      top: '0.3rem',
      right: '0.5rem',
    }}
    />
  );

  return (
    <div className="overlay">
      <div className="content">
        { closeicon() }
        {props.children}
      </div>
    </div>
  );
};


export default Modal;