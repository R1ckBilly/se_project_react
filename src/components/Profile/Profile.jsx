import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

import "./Profile.css";

function Profile({
  clothingItems,
  handleOpenAddGarmentModal,
  handleOpenItemModal,
  handleSignOutSubmit,
}) {
  return (
    <main className="profile">
      <div className="profile__sidebar">
        <SideBar />
        <button className="profile__signout-btn" onClick={handleSignOutSubmit}>
          Sign Out
        </button>
      </div>
      <ClothesSection
        clothingItems={clothingItems}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
        handleOpenItemModal={handleOpenItemModal}
      />
    </main>
  );
}

export default Profile;
