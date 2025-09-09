import "./Header.css";
import logo from "../../images/wtwr_logo.svg";
import avatar from "../../images/avatar_logo.svg";

import ToogleSwitch from "../ToogleSwitch/ToogleSwitch";

function Header({ handleOpenAddGarmentModal, weatherData }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__side">
      <img src={logo} alt="WTWR logo" className="header__logo" />
      <p className="header__place">
        <time className="header__datetime" dateTime={now}>
          {dateStr}
        </time>
        , {weatherData.city}
      </p>
      </div>
     <div className="header__side">
      <ToogleSwitch/>
      <button
        onClick={handleOpenAddGarmentModal}
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <p className="header__username">Haniel Alvarez</p>
      <img
        src={avatar}
        alt="Haniel Alvarez's avatar"
        className="header__avatar"
      />
      </div>
    </header>
  );
}

export default Header;
