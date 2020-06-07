import React, { useState } from "react";

const Modal = (props) => {
  function displayInfo() {
    switch (props.modalInfo) {
      case "Menu":
        return <div className="modal-info">This is Modal A</div>;
      case "Help":
        return <div className="modal-info">This is Modal B</div>;
      default:
        return null;
    }
  }

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  let modal = (
    <div>
      <div className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>

          <div className="modal-flex">{displayInfo()}</div>
        </div>
      </div>
    </div>
  );

  return props.displayModal ? modal : null;
};

const ModalWrapper = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const selectModal = () => {
    setIsModelOpen(!isModelOpen);
  };

  return (
    <div>
      <p onClick={() => selectModal("Modal A")}>Open Modal A</p>
      <Modal
        displayModal={isModelOpen}
        modalInfo={"Menu"}
        closeModal={selectModal}
      />
    </div>
  );
};

export default ModalWrapper;
