import closeBtnBlack from "../../images/close-btn-black.svg";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  isClosed,
  handleSubmit,
  children,
  title,
  buttonText,
  name,
}) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      isClosed(); // closes the modal when clicking the overlay
    }
  }

  return (
    <div
      className={`modal ${isOpen ? " modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container modal__container_type_form">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_form"
          onClick={isClosed}
        >
          <img
            src={closeBtnBlack}
            alt="close-icon"
            className="modal__close-icon"
          />
        </button>
        <form onSubmit={handleSubmit} name={name} className="modal__form">
          {children}
        </form>
        <button type="submit" className="modal__submit-btn">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
