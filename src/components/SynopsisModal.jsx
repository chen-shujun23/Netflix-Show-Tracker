import React from "react";

const SynopsisModal = ({ show, handleClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{show.name}</h2>
        </div>
        <div className="modal-body">
          <img src={show.image} alt={show.name} />
          <p>{show.description}</p>
        </div>
        <div className="modal-footer">
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SynopsisModal;
