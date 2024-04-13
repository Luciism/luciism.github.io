import { useRef } from "react";
import { Icon } from "@iconify/react";
import "./Modal.css";

const Modal = ({open, onClose, children}) => {
  const modalWrapperRef = useRef();

  const handleModalClick = (e) => {
    if (e.target === modalWrapperRef.current) {
      onClose();
    }
  };

  return (
    <div
      className={"modal-wrapper" + (open ? " open" : "")}
      onClick={handleModalClick}
      ref={modalWrapperRef}
    >
      <div className="modal-inner">
        <button className="close-modal-btn" onClick={onClose}>
          <Icon icon="ph:x-bold" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
