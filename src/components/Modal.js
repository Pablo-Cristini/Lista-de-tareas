import React from 'react';
import './Modal.css';

export default function Modal({ handleClose, children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>Cerrar el formulario</button>
      </div>
    </div>
  );
}