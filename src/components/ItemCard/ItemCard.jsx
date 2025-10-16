import "./ItemCard.css";
import logo from "../../images/card-like-btn.svg";
import logoLiked from "../../images/card-liked-btn.svg";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useContext } from "react";

function ItemCard({ data, onCardClick, handleLikeBtn }) {
  function handleOpenCard() {
    onCardClick(data);
  }
  const currentUser = useContext(CurrentUserContext);

  const isLiked = data.likes.some((item) => item === currentUser?._id);

  return (
    <li className="card">
      <h2 className="card__title">{data.name}</h2>
      { currentUser &&
        <button
          className="card__like-btn"
          onClick={() => handleLikeBtn(data._id, isLiked)}
        >
          <img src={isLiked ? logoLiked : logo} alt="card like button" />
        </button>
      }
      <img
        src={data.imageUrl}
        alt={data.name}
        className="card__image"
        onClick={handleOpenCard}
      />
    </li>
  );
}

export default ItemCard;
