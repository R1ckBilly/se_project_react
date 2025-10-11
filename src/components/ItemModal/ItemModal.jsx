import closeBtn from "../../images/close-btn.svg";
import "./ItemModal.css";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useContext } from "react";

function ItemModal({ card, isOpen, isClosed, isDeleted }) {
  
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card?.owner === currentUser?._id;
  
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
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__text">{card.name}</h2>
          <p className="modal__text">{card.weather}</p>
        </div>
        { isOwn && 
        <button
          type="button"
          className="modal__delete-btn"
          onClick={() => isDeleted(card)}
        >
          Delete item
        </button>
        }
      </div>
    </div>
  );
}

export default ItemModal;
