import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useContext } from "react";

// TODO - make the item modal open on the profile route
function ClothesSection({
  clothingItems,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
  handleLikeBtn,
}) {

  const currentUser =  useContext(CurrentUserContext);

  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your items
        <button
          onClick={handleOpenAddGarmentModal}
          className="clothes-section__btn"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {clothingItems.filter((item)=> item.owner === currentUser?._id).map((item) => {
          return (
            <ItemCard
              key={item._id}
              data={item}
              onCardClick={handleOpenItemModal}
              handleLikeBtn={handleLikeBtn}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
