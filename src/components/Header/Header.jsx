import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/wtwr_logo.svg";
import avatar from "../../images/avatar_logo.svg";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleOpenAddGarmentModal, weatherData }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__side">
        <Link className="header__link" to={"/"}>
          <img src={logo} alt="WTWR logo" className="header__logo" />
          <p className="header__place">
            <time className="header__datetime" dateTime={now}>
              {dateStr}
            </time>
            , {weatherData.city}
          </p>
        </Link>
      </div>
      <div className="header__side">
        <ToggleSwitch />
        <button
          onClick={handleOpenAddGarmentModal}
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
        <Link className="header__link" to={"/profile"}>
          <p className="header__username">Haniel Alvarez</p>
          <img
            src={avatar}
            alt="Haniel Alvarez's avatar"
            className="header__avatar"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
