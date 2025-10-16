import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

import "./Profile.css";

function Profile({
  clothingItems,
  handleOpenAddGarmentModal,
  handleOpenItemModal,
  handleSignOutSubmit,
  handleLikeBtn,
  handleOpenEditProfileModal,
}) {
  return (
    <main className="profile">
      <div className="profile__sidebar">
        <SideBar />
        <button className="profile__edit-data" onClick={handleOpenEditProfileModal}>Change profile data</button>
        <button className="profile__signout-btn" onClick={handleSignOutSubmit}>
          Sign Out
        </button>
      </div>
      <ClothesSection
        clothingItems={clothingItems}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
        handleOpenItemModal={handleOpenItemModal}
        handleLikeBtn={handleLikeBtn}
      />
    </main>
  );
}

export default Profile;
