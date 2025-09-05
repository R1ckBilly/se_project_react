import closeBtn from "../../images/close-btn.svg";
import "./ItemModal.css";

function ItemModal({ card, isOpen, isClosed }) {

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      isClosed();
    }
  }

  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <button type="button" className="modal__close-btn" onClick={isClosed}>
          <img src={closeBtn} alt="close-icon" className="modal__close-icon" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__text">{card.name}</h2>
          <p className="modal__text">{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
