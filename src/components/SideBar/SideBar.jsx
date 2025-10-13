import "./SideBar.css";
import avatar from "../../images/avatar_logo.svg";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";


function SideBar() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <p className="sidebar__username">
          {currentUser?.name}
        </p>
        <img
          src={currentUser?.avatar}
          alt="avatar"
          className="side__avatar"
        />
      </div>
    </aside>
  );
}

export default SideBar;
