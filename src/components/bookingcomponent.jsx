import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}>wa3333333333</div>
      <div className="bg-white rounded-lg shadow-lg p-8 z-10">
        {children}
      </div>
    </div>
  );
};

export default Modal;