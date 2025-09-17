import "./SideBar.css";
import avatar from "../../images/avatar_logo.svg";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <p className="sidebar__username">Haniel Alvarez</p>
        <img
          src={avatar}
          alt="Haniel Alvarez's avatar"
          className="side__avatar"
        />
      </div>
    </aside>
  );
}

export default SideBar;
